import { launch, Browser, Page, SetCookie } from 'puppeteer';
import * as fs from 'fs';


const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
(async () => {
  const browser: Browser = await launch();
  const page: Page = await browser.newPage();

  // Load cookies from JSON file
  const cookiesString = fs.readFileSync('./cookies.json', 'utf8');
  const cookies: SetCookie[] = JSON.parse(cookiesString);

  // Set the cookies for the page
  await Promise.all(cookies.map((cookie: SetCookie) => page.setCookie(cookie)));

  // Open the desired page
  await page.goto('https://aternos.org/server/');

  // Continue with your actions on the page
  // ...
  try {
    await (await page.$("#start"))?.click()
  } catch (e) {
    console.log(e)
  }
  // Close the browser when finished
  while(true){
    await sleep(10)
    try {
            
        let timer = await page.$eval('#read-our-tos > main > section > div.page-content.page-server > div.server-status > div.status.online > div > div > div.end-countdown > div.timer > div', div => div.textContent)
        try {
            
            console.log(parseInt(timer?.replace(":","")+""),timer);
            if (parseInt(timer?.replace(":","")+"")<59){
                await (await page.$("#read-our-tos > main > section > div.page-content.page-server > div.server-status > div.status.online > div > div > div.end-countdown > div.extend > button"))?.click()
                console.log("time up");
                
            }
        } catch (error) {
            
        }
    } catch (error) {
        
    }

  }
   
})();
