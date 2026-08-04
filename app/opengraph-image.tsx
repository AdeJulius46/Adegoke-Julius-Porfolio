import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "hsl(0, 0%, 7%)",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, hsla(45, 100%, 71%, 0.16) 0%, hsla(45, 100%, 71%, 0) 55%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 14,
              height: 14,
              borderRadius: 999,
              backgroundColor: "hsl(45, 100%, 72%)",
            }}
          />
          <div style={{ display: "flex", color: "hsl(0, 0%, 84%)", fontSize: 28 }}>
            {site.location}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            color: "hsl(0, 0%, 98%)",
            fontSize: 76,
            fontWeight: 600,
            lineHeight: 1.1,
          }}
        >
          {site.name}
        </div>

        <div
          style={{
            display: "flex",
            color: "hsl(45, 100%, 72%)",
            fontSize: 40,
            fontWeight: 600,
            marginTop: 18,
          }}
        >
          {site.title}
        </div>

        <div
          style={{
            display: "flex",
            color: "hsl(0, 0%, 84%)",
            fontSize: 28,
            marginTop: 28,
            maxWidth: 880,
            lineHeight: 1.5,
          }}
        >
          {site.tagline}
        </div>

        <div style={{ display: "flex", gap: 12, marginTop: 44 }}>
          {site.techLine.map((tech) => (
            <div
              key={tech}
              style={{
                display: "flex",
                color: "hsl(0, 0%, 84%)",
                fontSize: 22,
                backgroundColor: "hsl(240, 1%, 17%)",
                padding: "8px 20px",
                borderRadius: 999,
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
