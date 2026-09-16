import test,{expect, Locator,Dialog, FrameLocator,Frame} from  "@playwright/test";
//negating matches .not
// test('Validate the screenshot ',async({page})=>{
//  await page.goto("https://www.saucedemo.com/")  
//  await page.pause()
// let title=await page.title()
// //expect(title).not.toContain('Amazon')
// //expect(title).not.toContain('https://www.saucedemo.com/')
// expect(page).not.toHaveURL('https://www.saucedemo.com/')
//})
//hard and soft asserations

// test.only('Validate the screenshot ',async({page})=>{
//  await page.goto("https://demowebshop.tricentis.com/")  
//  await page.pause()
//  await expect.soft(page).toHaveURL("https://demowebshop.tricentis.com1/") 
// console.log(await page.locator('.topic-html-content').nth(0).innerText()) 
// })

// test("validate the wait",async({page})=>{

// await page.goto("https://demoqa.com/dynamic-properties")
// await page.locator('#enableAfter').click()
// await page.pause()


// })

test.only("validate the wait",async({page})=>{
await page.goto("https://the-internet.herokuapp.com/dynamic_loading/1")
await page.pause()
let button= page.locator('#start')
await button.click()
await page.pause()
let text=await page.locator('#finish').innerText()
console.log(text)
await page.pause()
})