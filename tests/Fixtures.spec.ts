import test, { chromium, Page } from "@playwright/test";

test.only("validate the broswer",async () => {
    //browser
    const browser= await chromium.launch();
     //context 
    const context= await browser.newContext();
    const page1=await context.newPage();
    const page2=await context.newPage();
    
    //page
    const page=await context.newPage()
    //await page.goto("https://www.amazon.in/")
    await page1.goto("https://the-internet.herokuapp.com/")
    await page2.goto("https://testautomationpractice.blogspot.com/ ")
    await page2.pause()
    page1.bringToFront()
     await page.pause()
     const page3=await context.newPage();
     await page3.goto('https://demoqa.com/')
    let allpage:Page[]=context.pages()
    console.log(allpage.length)
    for(let a of allpage)
    {
      let ptil= await a.title();
      if(ptil.includes("The Internet"))
      {
         await a.bringToFront();
         break;
      }
    }
await page3.pause()
let lenghtcontexts=browser.contexts().length
console.log(lenghtcontexts);
await page.pause()
});


