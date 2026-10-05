import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const roots = ["src", "README.md", "public"];
const forbidden = [
  { name: "quickwash", re: /quick\s*wash/i },
  { name: "qws", re: /\bqws\b/i },
  { name: "qui-ticket", re: /\bqui-\d/i },
  { name: "detailer", re: /detailer/i },
  { name: "washclub", re: /wash\s*club/i },
  { name: "quickbucks", re: /quick\s*bucks/i },
  { name: "operator-app", re: /operator-app/i },
  { name: "customer-app", re: /customer-app/i },
  { name: "customer-web", re: /customer-web/i },
  { name: "admin-web", re: /admin-web/i },
  { name: "linear-delivery", re: /linear-delivery/i },
  { name: "promote.sh", re: /promote\.sh/i },
  { name: "build_packet", re: /build_packet/i },
  { name: "delivery-lease", re: /delivery-lease/i },
  { name: "cursor/qui", re: /cursor\/qui/i },
];

function filesUnder(path) {
  const stat = statSync(path);
  if (stat.isFile()) return [path];
  const out = [];
  for (const entry of readdirSync(path)) {
    if (entry === "node_modules" || entry === ".next") continue;
    out.push(...filesUnder(join(path, entry)));
  }
  return out;
}

const hits = [];
for (const root of roots) {
  for (const file of filesUnder(root)) {
    if (!/\.(tsx?|jsx?|mjs|md|svg|css|json|txt)$/.test(file)) continue;
    const lines = readFileSync(file, "utf8").split("\n");
    lines.forEach((line, index) => {
      for (const rule of forbidden) {
        if (rule.re.test(line)) {
          hits.push(`${relative(".", file)}:${index + 1} matched ${rule.name}`);
        }
      }
    });
  }
}

if (hits.length > 0) {
  console.error("Forbidden product terms found:\n" + hits.join("\n"));
  process.exit(1);
}

console.log("check:copy passed");
