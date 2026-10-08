import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#D8D0BC",
          color: "#1E2A22",
          fontSize: 64,
          fontWeight: 700,
        }}
      >
        <div>Yahaya Abubakar</div>
        <div style={{ fontSize: 32, color: "#1F5A33" }}>
          Full-stack Developer — React, TypeScript, React Native, Rust, NestJS
        </div>
      </div>
    ),
    { ...size }
  );
}
