import { createHash } from "node:crypto";
import p1 from "../../../data/jdcIconPart1";
import p2 from "../../../data/jdcIconPart2";
import p3 from "../../../data/jdcIconPart3";

export const runtime = "nodejs";

export async function GET() {
  const bytes = Buffer.from(p1 + p2 + p3, "base64");
  const hash = createHash("sha256").update(bytes).digest("hex");
  if (bytes.length !== 8503 || hash !== "24be80f4055903b14e56e9c79e6b7d5e650746dbe6089ebdb94c8ca85871af35") {
    return new Response("JDC icon integrity check failed", { status: 500 });
  }
  return new Response(new Uint8Array(bytes), {
    headers: {
      "Content-Type": "image/png",
      "Content-Length": String(bytes.length),
      "Cache-Control": "public, max-age=31536000, immutable",
      "X-JDC-Icon-SHA256": hash
    }
  });
}
