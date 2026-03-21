import { NextRequest, NextResponse } from "next/server";
import {
  buildFallbackAssistantReply,
  CHATBOT_SYSTEM_PROMPT,
  type ChatMessageInput,
} from "@/lib/chatbot";

export const dynamic = "force-dynamic";

type OpenAiResponse = {
  output?: Array<{
    type?: string;
    content?: Array<{
      type?: string;
      text?: string;
    }>;
  }>;
};

function extractText(response: OpenAiResponse) {
  const parts = response.output
    ?.flatMap((item) => item.content ?? [])
    .filter((item) => item.type === "output_text" && item.text)
    .map((item) => item.text?.trim())
    .filter(Boolean);

  return parts?.join("\n\n") ?? "";
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { messages?: ChatMessageInput[] };
    const messages = body.messages ?? [];
    const latestUserMessage = [...messages]
      .reverse()
      .find((item) => item.role === "user");

    if (!latestUserMessage?.text?.trim()) {
      return NextResponse.json(
        { error: "A user message is required." },
        { status: 400 },
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({
        reply: buildFallbackAssistantReply(latestUserMessage.text),
        source: "fallback",
      });
    }

    const model = process.env.OPENAI_MODEL ?? "gpt-4o-mini";
    const input = [
      { role: "system", content: CHATBOT_SYSTEM_PROMPT },
      ...messages.slice(-8).map((message) => ({
        role: message.role,
        content: message.text,
      })),
    ];

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        input,
        temperature: 0.4,
        max_output_tokens: 220,
      }),
    });

    if (!response.ok) {
      const fallback = buildFallbackAssistantReply(latestUserMessage.text);
      return NextResponse.json({ reply: fallback, source: "fallback" });
    }

    const data = (await response.json()) as OpenAiResponse;
    const reply =
      extractText(data) || buildFallbackAssistantReply(latestUserMessage.text);

    return NextResponse.json({ reply, source: "openai" });
  } catch (error) {
    console.error("Chatbot API error:", error);
    return NextResponse.json(
      { error: "Unexpected server error." },
      { status: 500 },
    );
  }
}
