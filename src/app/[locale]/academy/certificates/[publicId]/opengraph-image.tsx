import { ImageResponse } from "next/og";
import { getCertificate } from "@/lib/academy";

export const runtime = "edge";
export const alt = "CloudAnzen Academy certificate";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface Props {
  params: { locale: string; publicId: string };
}

const FRAMEWORK_GRADIENT: Record<string, [string, string]> = {
  "iso-42001": ["#d946ef", "#8b5cf6"],
  "iso-27001": ["#10b981", "#0ea5e9"],
  "soc-2": ["#6366f1", "#d946ef"],
  hipaa: ["#f43f5e", "#f97316"],
  "nist-csf": ["#f59e0b", "#10b981"],
};

export default async function OgImage({ params }: Props) {
  const { publicId } = params;
  const cert = await getCertificate(publicId).catch(() => null);

  if (!cert || cert.status !== "verified") {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#0f172a",
            color: "white",
            fontSize: 48,
            fontWeight: 700,
          }}
        >
          Certificate not available
        </div>
      ),
      size,
    );
  }

  const [c1, c2] = FRAMEWORK_GRADIENT[cert.frameworkSlug] ?? ["#0f172a", "#334155"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            background: `linear-gradient(90deg, ${c1}, ${c2})`,
            color: "white",
            padding: "32px 64px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          <span>CloudAnzen Academy</span>
          <span
            style={{
              background: "rgba(255,255,255,0.2)",
              padding: "8px 20px",
              borderRadius: 999,
              fontSize: 18,
            }}
          >
            Verified
          </span>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 80px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 20, color: "#94a3b8", letterSpacing: 4 }}>
            CERTIFICATE OF COMPLETION
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#0f172a",
              marginTop: 24,
            }}
          >
            {cert.learnerName}
          </div>
          <div style={{ fontSize: 22, color: "#475569", marginTop: 16 }}>
            has successfully completed
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: "#0f172a",
              marginTop: 16,
            }}
          >
            {cert.courseTitle}
          </div>
          <div style={{ fontSize: 18, color: "#64748b", marginTop: 28 }}>
            Score {cert.scorePct}% · Issued{" "}
            {new Date(cert.issuedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
