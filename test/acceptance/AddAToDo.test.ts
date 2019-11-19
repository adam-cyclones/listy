const puppeteer = require('puppeteer');
/**
 * Acceptance tests with Chrome
*/
const devServerPort = 4444;
const url = `http://localhost:${devServerPort}/#/`;
const iPhone = puppeteer.devices['iPhone 6'];

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