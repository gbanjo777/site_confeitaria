import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { main as convertBlog } from "./convert-blog-to-html.js";

// carrega config com site.config.json se existir
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const configPath = path.join(projectRoot, "site.config.json");

let siteConfig = {};
if (fs.existsSync(configPath)) {
  try {
    siteConfig = JSON.parse(fs.readFileSync(configPath, "utf-8"));
  } catch (e) {
    // ignora erros de parse
  }
}

try {
  convertBlog(siteConfig);
} catch (error) {}

try {
  execSync("node seo-scripts/generate-sitemap.js", { stdio: "pipe" });
} catch (error) {}

console.log("Build success");
