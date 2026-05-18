import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

type DemoRequestBody = {
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  company?: unknown;
  role?: unknown;
  framework?: unknown;
  message?: unknown;
};

const DEMO_TO_EMAIL = process.env.DEMO_TO_EMAIL ?? "vineet@cloudanzen.com";
const DEMO_FROM_EMAIL =
  process.env.DEMO_FROM_EMAIL ?? "CloudAnzen Demo <hello@cloudanzen.com>";

function toTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function renderTextEmail({
  firstName,
  lastName,
  email,
  company,
  role,
  framework,
  message,
}: {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
  framework: string;
  message: string;
}) {
  return [
    "New CloudAnzen demo request",
    "",
    `Name: ${firstName} ${lastName}`,
    `Work email: ${email}`,
    `Company: ${company}`,
    `Role: ${role || "Not provided"}`,
    `Framework of interest: ${framework || "Not provided"}`,
    message ? `Message: ${message}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

function renderHtmlEmail({
  firstName,
  lastName,
  email,
  company,
  role,
  framework,
  message,
}: {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
  framework: string;
  message: string;
}) {
  const escapedFirstName = escapeHtml(firstName);
  const escapedLastName = escapeHtml(lastName);
  const escapedEmail = escapeHtml(email);
  const escapedCompany = escapeHtml(company);
  const escapedMessage = escapeHtml(message);
  const rows = [
    ["Full name", `${escapedFirstName} ${escapedLastName}`],
    ["Work email", escapedEmail],
    ["Company", escapedCompany],
    ["Role", role ? escapeHtml(role) : "—"],
    ["Framework of interest", framework ? escapeHtml(framework) : "—"],
  ];

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Demo Request</title>
</head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0;">

          <tr>
            <td style="background:linear-gradient(135deg,#0f172a 0%,#1e293b 50%,#0f2d5e 100%);padding:32px 40px;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:linear-gradient(135deg,#1d4ed8,#0d9488);border-radius:10px;width:36px;height:36px;text-align:center;vertical-align:middle;">
                    <span style="color:#ffffff;font-size:18px;font-weight:bold;">&#10003;</span>
                  </td>
                  <td style="padding-left:12px;">
                    <span style="color:#ffffff;font-size:20px;font-weight:700;letter-spacing:-0.3px;">CloudAnzen</span>
                  </td>
                </tr>
              </table>
              <p style="color:#94a3b8;font-size:13px;margin:12px 0 0;">New Demo Request</p>
            </td>
          </tr>

          <tr>
            <td style="padding:40px;">
              <h1 style="margin:0 0 8px;font-size:22px;font-weight:700;color:#0f172a;">
                New demo request
              </h1>
              <p style="margin:0 0 32px;font-size:15px;color:#475569;">
                <strong>${escapedFirstName} ${escapedLastName}</strong> from <strong>${escapedCompany}</strong> has requested a demo.
              </p>

              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
                ${rows
                  .map(
                    ([label, value], i) => `
                <tr style="background:${i % 2 === 0 ? "#f8fafc" : "#ffffff"};">
                  <td style="padding:14px 20px;font-size:13px;font-weight:600;color:#64748b;width:40%;border-bottom:1px solid #e2e8f0;">${label}</td>
                  <td style="padding:14px 20px;font-size:14px;color:#0f172a;border-bottom:1px solid #e2e8f0;">${value}</td>
                </tr>`,
                  )
                  .join("")}
                ${
                  escapedMessage
                    ? `<tr style="background:#f8fafc;">
                  <td style="padding:14px 20px;font-size:13px;font-weight:600;color:#64748b;vertical-align:top;">Message</td>
                  <td style="padding:14px 20px;font-size:14px;color:#0f172a;white-space:pre-wrap;">${escapedMessage}</td>
                </tr>`
                    : ""
                }
              </table>

              <div style="margin-top:32px;text-align:center;">
                <a href="mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent("Re: Your CloudAnzen demo request")}"
                   style="display:inline-block;padding:14px 32px;background:#1d4ed8;color:#ffffff;font-size:14px;font-weight:600;border-radius:10px;text-decoration:none;">
                  Reply to ${escapedFirstName}
                </a>
              </div>
            </td>
          </tr>

          <tr>
            <td style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:24px 40px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#94a3b8;">
                This email was sent from the demo request form at
                <a href="https://www.cloudanzen.com/demo" style="color:#1d4ed8;text-decoration:none;">cloudanzen.com/demo</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export async function POST(req: NextRequest) {
  try {
    let body: DemoRequestBody;

    try {
      body = (await req.json()) as DemoRequestBody;
    } catch {
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 },
      );
    }

    const firstName = toTrimmedString(body.firstName);
    const lastName = toTrimmedString(body.lastName);
    const email = toTrimmedString(body.email).toLowerCase();
    const company = toTrimmedString(body.company);
    const role = toTrimmedString(body.role);
    const framework = toTrimmedString(body.framework);
    const message = toTrimmedString(body.message);

    if (!firstName || !lastName || !email || !company) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid work email." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY?.trim();

    if (!apiKey) {
      console.error("Demo request email is not configured: RESEND_API_KEY missing.");
      return NextResponse.json(
        {
          error:
            "Demo requests are temporarily unavailable. Please email hello@cloudanzen.com.",
        },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails
      .send({
        from: DEMO_FROM_EMAIL,
        to: [DEMO_TO_EMAIL],
        replyTo: email,
        subject: `New demo request from ${firstName} ${lastName} — ${company}`,
        text: renderTextEmail({
          firstName,
          lastName,
          email,
          company,
          role,
          framework,
          message,
        }),
        html: renderHtmlEmail({
          firstName,
          lastName,
          email,
          company,
          role,
          framework,
          message,
        }),
      })
      .catch((sendError: unknown) => {
        console.error("Resend request failed:", sendError);
        return { error: sendError };
      });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        {
          error:
            "Failed to send demo request. Please email hello@cloudanzen.com.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "Unexpected server error." },
      { status: 500 },
    );
  }
}
