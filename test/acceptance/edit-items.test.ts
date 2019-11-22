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
describe('Edit items', () => {

  it('Should have initial item on load', async () => {
    // Arrange
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const newValue = 'China';
    // Act
    await page.emulate(iPhone);
    await page.goto(url);
    await page.focus(`[data-test='todo-item']`);
    await page.keyboard.type('China');
    await page.keyboard.press('Tab', {
      delay: 100
    });
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
    const persistedToDoValue = await page.evaluate(() => {
      const selectPriority = document.querySelector(`[data-test='todo-item']`);
      return selectPriority.value;
    });
    await browser.close();
    // Assert
    await expect(persistedToDoValue).toBe(newValue);
  });
});