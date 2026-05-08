import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const [, , rawTitle, rawCategory = "Building"] = process.argv;

if (!rawTitle) {
  console.error('Usage: node scripts/new-post.mjs "Post title" [Category]');
  process.exit(1);
}

const title = rawTitle.trim();
const category = rawCategory.trim();
const slug = title
  .toLowerCase()
  .replace(/['"]/g, "")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");

const date = new Date().toISOString().slice(0, 10);
const file = resolve("public/js/data.js");
const source = readFileSync(file, "utf8");

if (source.includes(`slug: "${slug}"`)) {
  console.error(`A post with slug "${slug}" already exists.`);
  process.exit(1);
}

const post = `    {
      slug: "${slug}",
      title: "${title.replaceAll('"', '\\"')}",
      date: "${date}",
      category: "${category.replaceAll('"', '\\"')}",
      readTime: 4,
      excerpt:
        "Write a short one- or two-sentence summary here.",
      body: [
        "Write the first paragraph here.",
        "Write the second paragraph here.",
        "Write the third paragraph here."
      ]
    },
`;

const marker = "  posts: [\n";
if (!source.includes(marker)) {
  console.error("Could not find the posts array in public/js/data.js.");
  process.exit(1);
}

writeFileSync(file, source.replace(marker, marker + post), "utf8");
console.log(`Created draft post: ${slug}`);
console.log("Edit public/js/data.js, then commit and push to deploy.");
