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
describe('Priority sorting', () => {

  it('Should have initial priority of the lowest aka MEH', async () => {
    // Arrange
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const MEH = "3";
    // Act
    await page.emulate(iPhone);
    await page.goto(url);
    const selectListValue = await page.evaluate(() => {
      const selectPriority = document.querySelector(`.tdl-PrioritySelectList`);
      return selectPriority.value;
    });

    await browser.close();
    // Assert
    await expect(selectListValue).toBe(MEH);
  });

  it('Should change order to be higher than that of items with priority MEH', async () => {
    // Arrange
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const LIFE_CHANGING = "1";
    // Act
    await page.emulate(iPhone);
    await page.goto(url);
    // add item, is initially lowest
    await page.click(`[data-test='add-list-btn']`);

    // change to highest
    await page.select(`.tdl-Item:nth-of-type(2) [data-test='change-priority-order-select']`, LIFE_CHANGING);

    const newPriorityValue = await page.evaluate(() => {
      // query first in list that we just added and changed priority
      const selectPriority = document.querySelector(`.tdl-Item [data-test='change-priority-order-select']`);
      return selectPriority.value;
    });

    await browser.close();
    // Assert
    await expect(newPriorityValue).toBe('1');
  });
});