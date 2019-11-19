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

// This application is intended to target mobile devices only
describe('Add to do item', () => {

  it('Should exist', async () => {
    // Arrange
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // Act
    await page.emulate(iPhone);
    await page.goto(url);
    const el = await page.evaluate(() => document.querySelector('body'));
    await browser.close();
    // Assert
    await expect(el).toBeTruthy();
  });
});