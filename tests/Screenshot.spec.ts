import test,{expect, Locator,Dialog, FrameLocator,Frame} from  "@playwright/test";

test.only('Validate the screenshot ',async({page})=>{
 await page.goto("https://www.saucedemo.com/")  
 await page.pause()  
 await page.getByPlaceholder('UserName').fill('error_user')
 await page.getByPlaceholder('Password').fill('secret_sauce')
 await  page.getByRole('button',{name:"Login"}).click()
 //date interface
//let dte= Date.now()
//dte object
let date=new Date();
console.log(date.toDateString());
console.log(date.toISOString());
 let d=date.toISOString().replace(/[:,-]/g,"");
  await page.screenshot({path: "Screenshot/" +d+ "Demo.png",fullPage:true})
let locator= page.locator('.inventory_item').nth(0);
await locator.screenshot({path: "Screenshot/" +d+ "Demo.png"})
});