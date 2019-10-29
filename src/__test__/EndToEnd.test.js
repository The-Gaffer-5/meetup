import puppeteer from 'puppeteer';



describe('show/hide an event details', () => {
    let browser;
    let page;
    beforeAll(async () => {
        browser = await puppeteer.launch({
            // headless: false,
            // slowMo: 250
        });
        page = await browser.newPage();
        await page.goto('http://localhost:3000');
        await page.waitForSelector('.event');
    });

    afterAll(() => {
        browser.close();
    });

    test('An event element is collapsed by default', async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('http://localhost:3000');

        await page.waitForSelector('.event');

        const extra = await page.$('event .extra');
        expect(extra).toBeNull();
        browser.close();
    });

    test('User can expand an event to see its details', async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('http://localhost:3000');

        await page.waitForSelector('.event');
        await page.click('.event .details');

        const extra = await page.$('.event .extra');
        expect(extra).toBeDefined();
        browser.close();
    });

    test('User can collapse an event to hide its details', async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('http://localhost:3000');

        await page.waitForSelector('.event');
        await page.click('.event .details');
        await page.click('.event .noDetails');
        const extra = await page.$('.event extra');
        expect(extra).toBeNull();
    });
})