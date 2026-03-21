"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Send, ShieldCheck, Sparkles, X } from "lucide-react";
import { CHATBOT_SUGGESTIONS } from "@/lib/chatbot";

type ChatMessage = {
  id: string;
  role: "assistant" | "user";
  text: string;
};

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: "welcome",
    role: "assistant",
    text: "Hi - I am the CloudAnzen AI assistant. I can answer general questions about SOC 2, ISO 27001, GDPR, audit readiness, and how CloudAnzen helps teams stay continuously compliant.",
  },
  {
    id: "nudge",
    role: "assistant",
    text: "If you want a tailored walkthrough for your team, I can also point you to a live demo.",
  },
];

function CloudAnzenAiMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="19"
        y="4"
        width="26"
        height="8"
        rx="4"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M32 12V18"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M8 32C13.5 20.5 22.3 15 32 15C41.7 15 50.5 20.5 56 32C50.5 43.5 41.7 49 32 49C22.3 49 13.5 43.5 8 32Z"
        fill="url(#cloudanzen-ai-fill)"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="32" r="11" fill="currentColor" opacity="0.2" />
      <circle cx="32" cy="32" r="7" fill="currentColor" />
      <circle cx="43" cy="23" r="2.5" fill="currentColor" opacity="0.95" />
      <circle cx="21" cy="23" r="2.5" fill="currentColor" opacity="0.95" />
      <path
        d="M25 41C26.9 43.2 29.2 44.2 32 44.2C34.8 44.2 37.1 43.2 39 41"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M15 26L10 22"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M49 26L54 22"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.8"
      />
      <defs>
        <linearGradient
          id="cloudanzen-ai-fill"
          x1="8"
          y1="15"
          x2="56"
          y2="49"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="currentColor" stopOpacity="0.14" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.04" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function WebsiteAiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [isLoading, setIsLoading] = useState(false);
  const messageCounter = useRef(INITIAL_MESSAGES.length + 1);

  const showDemoNudge = useMemo(
    () => messages.length >= 3 || input.toLowerCase().includes("demo"),
    [messages.length, input],
  );

  async function sendMessage(rawText?: string) {
    const nextText = (rawText ?? input).trim();
    if (!nextText || isLoading) return;

    const nextId = messageCounter.current;
    messageCounter.current += 2;

    const userMessage: ChatMessage = {
      id: `user-${nextId}`,
      role: "user",
      text: nextText,
    };

    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setInput("");
    setIsOpen(true);

    try {
      setIsLoading(true);
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: nextMessages }),
      });

      const data = (await response.json()) as {
        reply?: string;
        error?: string;
      };
      const replyText =
        data.reply ??
        "I hit a temporary issue, but I can still help you book a demo for a tailored walkthrough.";

      const assistantMessage: ChatMessage = {
        id: `assistant-${nextId + 1}`,
        role: "assistant",
        text: replyText,
      };

      setMessages((current) => [...current, assistantMessage]);
    } catch {
      const assistantMessage: ChatMessage = {
        id: `assistant-${nextId + 1}`,
        role: "assistant",
        text: "I hit a temporary connection issue. If you want tailored guidance for your team, booking a demo is the fastest next step.",
      };

      setMessages((current) => [...current, assistantMessage]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex max-w-[calc(100vw-2rem)] flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {isOpen && (
        <div className="w-[min(24rem,calc(100vw-2rem))] overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
          <div className="bg-[linear-gradient(135deg,#0f172a_0%,#17356b_58%,#0d9488_100%)] px-5 py-4 text-white">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="rounded-2xl bg-white/12 p-2.5 text-white backdrop-blur-sm">
                  <CloudAnzenAiMark className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">CloudAnzen AI guide</p>
                  <p className="mt-1 text-sm leading-6 text-slate-200">
                    Ask about frameworks, audits, evidence, or readiness.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-white/10 p-2 text-slate-100 transition hover:bg-white/20"
                aria-label="Close chatbot"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="max-h-[26rem] space-y-3 overflow-y-auto bg-slate-50/70 px-4 py-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm ${
                    message.role === "user"
                      ? "bg-slate-950 text-white"
                      : "border border-slate-200 bg-white text-slate-700"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-slate-200 bg-white p-3">
              <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                Suggested questions
              </div>
              <div className="flex flex-wrap gap-2">
                {CHATBOT_SUGGESTIONS.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => sendMessage(suggestion)}
                    disabled={isLoading}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-left text-xs font-medium text-slate-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>

            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 shadow-sm">
                  CloudAnzen AI is thinking...
                </div>
              </div>
            )}

            {showDemoNudge && (
              <div className="rounded-2xl border border-teal-200 bg-teal-50 px-4 py-3 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-700" />
                  <div>
                    <p className="font-semibold text-slate-900">
                      Want tailored guidance for your team?
                    </p>
                    <p className="mt-1 leading-6 text-slate-600">
                      Book a demo to see how CloudAnzen fits your frameworks,
                      evidence workflows, and audit motion.
                    </p>
                    <Link
                      href="/demo"
                      className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition hover:text-teal-800"
                    >
                      Book a demo
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-slate-200 bg-white p-4">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    void sendMessage();
                  }
                }}
                placeholder="Ask about SOC 2, audits, controls, or readiness..."
                className="h-11 flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => void sendMessage()}
                disabled={isLoading}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-2 text-xs leading-5 text-slate-500">
              For general guidance only. For a tailored walkthrough, book a
              demo.
            </p>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(15,23,42,0.35)] transition hover:-translate-y-0.5 hover:bg-slate-800"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#2563eb_0%,#14b8a6_100%)] text-white">
          <CloudAnzenAiMark className="h-5 w-5" />
        </span>
        <span className="text-left">
          <span className="block text-sm">Ask the AI guide</span>
          <span className="block text-xs font-medium text-slate-300">
            Framework and audit questions
          </span>
        </span>
      </button>
    </div>
  );
}
