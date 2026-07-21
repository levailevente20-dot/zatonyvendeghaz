import sharp from "sharp";

const logoPath = "../vendeghaz/LOGO/zátony vendégház logo.png";

const { data, info } = await sharp(logoPath)
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;

function pixelAt(x, y) {
  const idx = (y * width + x) * channels;
  return [data[idx], data[idx + 1], data[idx + 2], channels === 4 ? data[idx + 3] : 255];
}

function toHex([r, g, b]) {
  return "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("");
}

// Sample a grid of points and count color frequency (rounded) to find dominant colors
const counts = new Map();
const step = 4;
for (let y = 0; y < height; y += step) {
  for (let x = 0; x < width; x += step) {
    const [r, g, b, a] = pixelAt(x, y);
    if (a < 200) continue; // skip transparent
    const key = `${Math.round(r / 8) * 8},${Math.round(g / 8) * 8},${Math.round(b / 8) * 8}`;
    counts.set(key, (counts.get(key) || 0) + 1);
  }
}

const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10);
console.log(`Image size: ${width}x${height}, channels: ${channels}`);
console.log("Top colors (r,g,b -> hex : count):");
for (const [key, count] of sorted) {
  const [r, g, b] = key.split(",").map(Number);
  console.log(`  ${toHex([r, g, b])}  (${key})  x${count}`);
}
