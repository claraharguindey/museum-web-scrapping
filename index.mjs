import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

await page.goto("https://www.galeriadelascoleccionesreales.es/coleccion");
const pieces = await page.$$eval(".section-card-image", (results) =>
  results.map((el, i) => {
    const src = el.querySelector("img").getAttribute("src");
    const alt = el.querySelector("img").getAttribute("alt");
    return { src, alt };
  })
);

console.log( pieces.slice(-16));
await browser.close();
