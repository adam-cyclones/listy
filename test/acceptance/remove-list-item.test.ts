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
describe('Removing to do items', () => {

  it('Should remove a list item', async () => {
    // Arrange
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // Act
    await page.emulate(iPhone);
    await page.goto(url);
    // remove initial item
    await page.click(`[data-test='delete-item-btn']`);
    const elCount = await page.evaluate(() => {
      const btn = document.querySelectorAll(`.tdl-Item`);
      return btn.length;
    });
    await browser.close();
    // Assert
    await expect(elCount).toBe(1);
  });

  it('Should clear a list of items', async () => {
    // Arrange
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // Act
    await page.emulate(iPhone);
    await page.goto(url);
    // add items + 5 + initial
    await page.click(`[data-test='add-list-btn']`);
    await page.click(`[data-test='add-list-btn']`);
    await page.click(`[data-test='add-list-btn']`);
    await page.click(`[data-test='add-list-btn']`);
    await page.click(`[data-test='add-list-btn']`);
    // clear
    await page.click(`[data-test='clear-list-of-items']`);
    const elCount = await page.evaluate(() => {
      const btn = document.querySelectorAll(`.tdl-Item`);
      return btn.length;
    });
    await browser.close();
    // Assert
    await expect(elCount).toBe(0);
  });
});