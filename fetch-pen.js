const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://codepen.io/BalintFerenczy/pen/KwdoyEN', { waitUntil: 'networkidle2' });
  
  const data = await page.evaluate(() => {
    return document.documentElement.innerHTML;
  });
  
  require('fs').writeFileSync('pen.html', data);
  await browser.close();
})();
