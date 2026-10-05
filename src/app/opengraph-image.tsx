import { ImageResponse } from "next/og";

export const alt = "AutoLoop — the fully automated software lifecycle";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#07090f",
          color: "#eef3f8",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 8,
            color: "#3ee0ff",
          }}
        >
          AUTOLOOP
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, lineHeight: 1.05, maxWidth: 980 }}>
            The software lifecycle, fully automated.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 28,
              lineHeight: 1.4,
              color: "#9aa8bd",
              maxWidth: 920,
            }}
          >
            Signals, intake, ground, build, land, development, ship, release
            gate, production.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
