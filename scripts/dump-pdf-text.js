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
  console.log(text);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});


