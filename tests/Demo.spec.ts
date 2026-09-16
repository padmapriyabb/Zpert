import { test,expect,Locator } from "@playwright/test"
// test('validate the facebook',async({page})=>
// {
//     await page.goto('https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F')
//     await page.pause();

// //    let tittle:string= await page.title();
// //    console.log(tittle)
  // tohavetittle
// //    await expect(page).toHaveTitle(/Facebook/);//toHave tittle
// });


test('Validate login page',async({page})=>{
 await page.goto("https://www.saucedemo.com/")
await page.getByPlaceholder('Username').fill('error_user')
await page.getByPlaceholder('Password').fill('secret_sauce')
await page.getByRole('button',{name:"Login"}).click()
await page.pause()
let prdt=page.getByText('Products');
await expect(prdt).toBeVisible();
})