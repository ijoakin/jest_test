import puppetter from 'puppeteer';
import { delay } from '@redux-saga/core/effects';
const fs = require('fs');
const request = require('request');

let page: puppetter.Page;
describe('Google', () => {
  beforeAll(async () => {
  
   
  }) 

 it('should work', async () =>  {
    jest.setTimeout(35000);
    //const browser = await puppetter.launch({ executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe', headless: false });
   
    
    //const cert = fs.readFileSync('c:\\cert\securly_ca_2034.pem');
    //const key = fs.readFileSync('/path/to/cert.key.pem');
    //await page.setRequestInterception(true);
  
    // Client cert files
    
    //await page.goto('http://localhost:3000', {waitUntil: 'domcontentloaded'});
    // const browser = await puppetter.connect({ browserURL: 'http://localhost:3000'});
    // const page = await browser.newPage();
    
    //http://127.0.0.1:9222/json/version
    const wsChromeEndpointurl = 'ws://127.0.0.1:9222/devtools/browser/d89a29bf-b5b0-44df-b15b-0e505bcf6d10';
    const browser = await puppetter.connect({
        browserWSEndpoint: wsChromeEndpointurl,
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000', {waitUntil: 'domcontentloaded'});

    //const navigationPromise = page.waitForNavigation();
    //await page.waitForSelector('#txtTotal', {visible: true, timeout: 30000}).then(el => console.log(el));
    //await page.waitForSelector('#txtTotal', {visible: true, timeout: 30000}).then(el => el?.click());
    //await page.setBypassCSP(true);

    //await page.waitForSelector('#btnGetProduct', {visible: true, timeout: 30000});
    await page.click("#btnGetProduct");
    await page.click("#btnGetTotal");

    //const element = await page.$("#txtTotal");
    //const text = await page.evaluate(element => element.textContent, element);
    
    //How to set the text
    //const element = await page.$("#txtTotal");
    //await page.evaluate(element => { element.value = 7; }, element);


    //how to get the text
    const elm = await page.$("#txtTotal");
    const text = await page.evaluate((elm:any) => elm.textContent, elm);
    const textInput = await page.$eval('#txtTotal', input => input.getAttribute('value'));
    //console.log(elm);

    //const text = await page.$eval(".txtTotal", input => input.textContent);
    
    expect(textInput).toEqual("75");

    //await page.waitForSelector('#txtTotal', {visible: true, timeout: 30000});
    
    
    //value?.click();
    //await navigationPromise;
    
    // //await page.waitForNavigation();

    // //await delay(10000);

    
    // //await page.waitFor(500);

    // await page.click('#txtTotal');
    // await page.type('#txtTotal','asdas');

    // await page.click("#btnGetProduct");
    // await page.click("#btnGetTotal");

    //const textInput = await page.$eval('#txtTotal', input => input.textContent).then((value) => value);

    //expect(textInput).toEqual("0");

    delay(10000);
    console.log('done');
    //await browser.close();
    
 })


});