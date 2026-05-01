const fs = require('fs');

const html = fs.readFileSync('pen.html', 'utf-8');
const match = html.match(/window\.__PEN_DATA__\s*=\s*(\{.*?\});/);

if (match) {
  try {
    const data = JSON.parse(match[1]);
    console.log("Found PEN DATA!");
    fs.writeFileSync('pen.js', data.js || '');
    fs.writeFileSync('pen.css', data.css || '');
    console.log("Wrote pen.js and pen.css");
  } catch (e) {
    console.log("Error parsing JSON", e);
  }
} else {
  console.log("No PEN DATA found.");
}
