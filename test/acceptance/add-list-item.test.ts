const puppeteer = require('puppeteer');
const isReachable = require('is-reachable');
/**
 * Acceptance tests with Chrome
*/
const devServerPort = 4444;
const url = `http://localhost:${devServerPort}/#/`;
const iPhone = puppeteer.devices['iPhone 6'];

// livelyness check
;(async () => {
  if (!await isReachable(url)) {
    // 🔥 Oh no, did you forgot the server isnt running? 🔥
    // Run 'npm run serve' before trying this suite again.
    process.exit("SIGTERM");
  }
})();

// allow up to 30 secs per test
jest.setTimeout(30000);

// This application is intended to target mobile devices only
describe('Add to do item', () => {

  it('Should have initial item on load', async () => {
    // Arrange
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // Act
    await page.emulate(iPhone);
    await page.goto(url);
    const elCount = await page.evaluate(() => {
      const btn = document.querySelectorAll(`.tdl-Item`);
      return btn.length;
    });
    await browser.close();
    // Assert
    await expect(elCount).toBe(1);
  });

  it('Should add item', async () => {
    // Arrange
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // Act
    await page.emulate(iPhone);
    await page.goto(url);
    await page.click(`[data-test='add-list-btn']`);
    const elCount = await page.evaluate(() => {
      const btn = document.querySelectorAll(`.tdl-Item`);
      return btn.length;
    });
    await browser.close();
    // Assert
    await expect(elCount).toBe(2);
  });

  it('Should persist item', async () => {
    // Arrange
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // Act
    await page.emulate(iPhone);
    await page.goto(url);
    await page.click(`[data-test='add-list-btn']`);
    await page.click(`[data-test='add-list-btn']`);
    await page.click(`[data-test='add-list-btn']`);
    await page.click(`[data-test='add-list-btn']`);
    await page.click(`[data-test='add-list-btn']`);
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
    const elCount = await page.evaluate(() => {
      const btn = document.querySelectorAll(`.tdl-Item`);
      return btn.length;
    });
    await browser.close();
    // Assert
    await expect(elCount).toBe(6);
  });

  it('Should add multiple items', async () => {
    // Arrange
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // Act
    await page.emulate(iPhone);
    await page.goto(url);
    await page.click(`[data-test='add-list-btn']`);
    await page.click(`[data-test='add-list-btn']`);
    await page.click(`[data-test='add-list-btn']`);
    const elCount = await page.evaluate(() => {
      const btn = document.querySelectorAll(`.tdl-Item`);
      return btn.length;
    });
    await browser.close();
    // Assert
    await expect(elCount).toBe(4);
  });
});