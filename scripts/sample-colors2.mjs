import sharp from "sharp";

async function sampleTop(path) {
  const { data, info } = await sharp(path).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const counts = new Map();
  const step = 4;
  for (let y = 0; y < height; y += step) {
    for (let x = 0; x < width; x += step) {
      const idx = (y * width + x) * channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      const a = channels === 4 ? data[idx+3] : 255;
      if (a < 200) continue;
      const key = `${Math.round(r/8)*8},${Math.round(g/8)*8},${Math.round(b/8)*8}`;
      counts.set(key, (counts.get(key)||0)+1);
    }
  }
  const sorted = [...counts.entries()].sort((a,b)=>b[1]-a[1]).slice(0,6);
  console.log(`\n=== ${path} (${width}x${height}) ===`);
  for (const [key,count] of sorted) {
    const [r,g,b] = key.split(",").map(Number);
    const hex = "#" + [r,g,b].map(v=>v.toString(16).padStart(2,"0")).join("");
    console.log(`  ${hex}  x${count}`);
  }
}

await sampleTop("../vendeghaz/LOGO/2.png");
await sampleTop("../vendeghaz/LOGO/3.png");
await sampleTop("../vendeghaz/LOGO/4.png");
