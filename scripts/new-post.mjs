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

if (!title || !slug || !category) {
  console.error("Provide a title containing letters or numbers and a non-empty category.");
  process.exit(1);
}

const date = new Date().toISOString().slice(0, 10);
const file = resolve("public/js/data.js");
const source = readFileSync(file, "utf8");

if (source.includes(`slug: "${slug}"`)) {
  console.error(`A post with slug "${slug}" already exists.`);
  process.exit(1);
}

const post = `    {
      slug: ${JSON.stringify(slug)},
      title: ${JSON.stringify(title)},
      date: "${date}",
      category: ${JSON.stringify(category)},
      published: false,
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

const marker = /(^[\t ]*posts:\s*\[)[\t ]*(?:\r?\n)?/m;
if (!marker.test(source)) {
  console.error("Could not find the posts array in public/js/data.js.");
  process.exit(1);
}

writeFileSync(file, source.replace(marker, (_, opening) => `${opening}\n${post}`), "utf8");
console.log(`Created draft post: ${slug}`);
console.log("Edit public/js/data.js. Set published: true only when the post is ready to appear on the site.");
console.log("Then commit and push to deploy.");
