/*
  Quick PDF -> portfolio config helper
  Usage: node scripts/extract-from-pdf.js ../public/resume.pdf
*/
const fs = require("fs");
const path = require("path");
const pdf = require("pdf-parse");

async function main() {
  const pdfPath = process.argv[2] || path.join(__dirname, "../public/resume.pdf");
  if (!fs.existsSync(pdfPath)) {
    console.error("PDF not found:", pdfPath);
    process.exit(1);
  }
  const dataBuffer = fs.readFileSync(pdfPath);
  const { text } = await pdf(dataBuffer);

  const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);

  const email = (text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i) || [null])[0];
  const phone = (text.match(/\+?\d[\d\s().-]{7,}\d/) || [null])[0];
  const github = (text.match(/github\.com\/[\w-]+/i) || [null])[0];
  const linkedin = (text.match(/linkedin\.com\/[\w\/-]+/i) || [null])[0];

  // Heuristic skills extraction: look for a section header and collect a few lines
  const skillsIdx = lines.findIndex((l) => /skills?/i.test(l));
  let skills = [];
  if (skillsIdx !== -1) {
    const blob = lines.slice(skillsIdx, skillsIdx + 6).join(" ");
    skills = blob
      .replace(/skills?:/i, "")
      .split(/[•,|\u2022\u00b7\-|\n]/)
      .map((s) => s.trim())
      .filter((s) => s && s.length < 30 && /[a-zA-Z]/.test(s))
      .slice(0, 20);
  }

  const name = lines[0] && lines[0].length < 60 ? lines[0] : "";

  const result = {
    name,
    contacts: { email, phone, github: github && `https://${github}`, linkedin: linkedin && `https://${linkedin}` },
    skills,
  };

  console.log(JSON.stringify(result, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});


