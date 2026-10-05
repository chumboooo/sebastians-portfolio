import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = site.seo.description;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", height: "100%", padding: "72px", background: "#fffefa", color: "#211d1e", border: "16px solid #782f40" }}>
      <div style={{ fontSize: 72, fontWeight: 700 }}>{site.name}</div>
      <div style={{ marginTop: 28, fontSize: 30 }}>{`${site.degree} · ${site.school}`}</div>
      <div style={{ marginTop: 12, fontSize: 28, color: "#782f40" }}>{`Expected ${site.graduation}`}</div>
      <div style={{ marginTop: 36, fontSize: 26 }}>{site.focus}</div>
      <div style={{ marginTop: 40, fontSize: 24, color: "#782f40" }}>{new URL(site.links.portfolio).hostname}</div>
    </div>,
    size,
  );
}
