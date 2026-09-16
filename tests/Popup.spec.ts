import test from "@playwright/test";

test('Validate from popup',async({browser})=>{
   const context= await browser.newContext();
   const page=await context.newPage();
   page.goto("https://testautomationpractice.blogspot.com/")
//    await page.waitForEvent("popup")
//    await page.locator('#PopUp').click()
  const [newPage]=await Promise.all([await page.waitForEvent("popup"), await page.locator('#PopUp').click()])
   await newPage.waitForLoadState()
  let all= context.pages()
  console.log(all.length)
  await page.pause()

  for(let a of all)
  {
    console.log(a.url());
    let tittle=await a.title();
    if(tittle.includes("Playwright"))
    {
        await a.locator(".getStarted_Sjon").click()
    }
  }
    await page.pause()
});
    
