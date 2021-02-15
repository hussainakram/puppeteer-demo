import puppeteer from 'puppeteer';

const runPuppeteer = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await page.screenshot({ path: 'google.png' });
}

export default runPuppeteer;
