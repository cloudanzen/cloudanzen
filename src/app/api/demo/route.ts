import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY ?? "placeholder");

  try {
    const body = await req.json();
    const { firstName, lastName, email, company, role, framework, message } = body;

    // Basic validation
    if (!firstName || !lastName || !email || !company) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "CloudAnzen Demo <noreply@cloudanzen.com>",
      to: ["vineet@cloudanzen.com"],
      replyTo: email,
      subject: `New demo request from ${firstName} ${lastName} — ${company}`,
      html: `
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

          <!-- Header -->
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

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <h1 style="margin:0 0 8px;font-size:22px;font-weight:700;color:#0f172a;">
                New demo request
              </h1>
              <p style="margin:0 0 32px;font-size:15px;color:#475569;">
                <strong>${firstName} ${lastName}</strong> from <strong>${company}</strong> has requested a demo.
              </p>

              <!-- Details table -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
                ${[
                  ["Full name", `${firstName} ${lastName}`],
                  ["Work email", email],
                  ["Company", company],
                  ["Role", role || "—"],
                  ["Framework of interest", framework || "—"],
                ]
                  .map(
                    ([label, value], i) => `
                <tr style="background:${i % 2 === 0 ? "#f8fafc" : "#ffffff"};">
                  <td style="padding:14px 20px;font-size:13px;font-weight:600;color:#64748b;width:40%;border-bottom:1px solid #e2e8f0;">${label}</td>
                  <td style="padding:14px 20px;font-size:14px;color:#0f172a;border-bottom:1px solid #e2e8f0;">${value}</td>
                </tr>`
                  )
                  .join("")}
                ${
                  message
                    ? `<tr style="background:#f8fafc;">
                  <td style="padding:14px 20px;font-size:13px;font-weight:600;color:#64748b;vertical-align:top;">Message</td>
                  <td style="padding:14px 20px;font-size:14px;color:#0f172a;white-space:pre-wrap;">${message}</td>
                </tr>`
                    : ""
                }
              </table>

              <!-- CTA -->
              <div style="margin-top:32px;text-align:center;">
                <a href="mailto:${email}?subject=Re: Your CloudAnzen demo request"
                   style="display:inline-block;padding:14px 32px;background:#1d4ed8;color:#ffffff;font-size:14px;font-weight:600;border-radius:10px;text-decoration:none;">
                  Reply to ${firstName}
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
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
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "Unexpected server error." },
      { status: 500 }
    );
  }
}
