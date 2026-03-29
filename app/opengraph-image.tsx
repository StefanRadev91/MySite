import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Stefan Radev — Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#1a6fd4",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo icon */}
        <svg width="80" height="96" viewBox="0 0 50 60" fill="none">
          <path d="M18 12L6 30L18 48" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M32 48L44 30L32 12" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="28" y1="8" x2="22" y2="52" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        </svg>

        <div style={{ color: "white", fontSize: "56px", fontWeight: "800", marginTop: "24px", letterSpacing: "-1px" }}>
          STEFAN RADEV
        </div>
        <div style={{ color: "#00c853", fontSize: "24px", fontWeight: "600", marginTop: "8px", letterSpacing: "4px" }}>
          WEB DEVELOPMENT
        </div>
        <div style={{
          color: "rgba(255,255,255,0.7)",
          fontSize: "18px",
          marginTop: "32px",
          maxWidth: "600px",
          textAlign: "center",
          lineHeight: "1.6",
        }}>
          Модерни уебсайтове за вашия бизнес
        </div>
      </div>
    ),
    size
  );
}
