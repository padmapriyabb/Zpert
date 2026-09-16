import test, { expect, Locator } from "@playwright/test";

// test('validate the tittle', async({page})=>
// {
//    await page.goto("https://practicetestautomation.com/")
//    await  page.pause()   
//    let title:string=await page.title();
//    console.log(title)
//    await expect(page).toHaveTitle(/Practice/);
// });

// test('validate the locator',async({page})=>
// {
//     await page.goto("https://practicetestautomation.com/")
//     await  page.pause()  
//     //get By text
//     let text:Locator=page.getByText("Contact")
//     await expect(text).toBeVisible();
//     //get by palceholder
//     let namebox : Locator=page.getByPlaceholder("Name")
//     await  namebox.fill('Riyan')

//    let mailbox:Locator= page.getByPlaceholder('Email address')
//     await mailbox.fill('Riyan@123')
//     await page.pause()
// })
// test('validate getbyalt',async({page})=>{

//      await page.goto("https://practicetestautomation.com/blog/")
//      //getByAltTex
//      let alt : Locator= page.getByAltText("Practice Test Automation");
//    await  expect(alt).toBeVisible()
//        await  alt.click()
//      await  page.pause()
// })
// // //getbytext
// // test('validate getByAltTex',async({page})=>
// // {
// //        await page.goto("https://www.flipkart.com/")
// //             let Alttext:Locator= page.getByTitle("Search for Products, Brands and More");
// //             await expect(Alttext).toBeVisible()
// //            await Alttext.nth(1).fill("hellowello")
// //            page.pause()
// // })
// // //getbylabel
// // test('validate label',async({page})=>
// // {

// //      page.goto("https://practicetestautomation.com/practice-test-login/ ")
// //     await page.getByLabel('username').fill('GOWRI')
// //     await page.getByLabel('password').fill('GOWRI')
// //   await  page.pause()
// // })
// // //getbyrole
// // test.only('validate Role',async({page})=>
// // {
// //     page.goto("https://practicetestautomation.com/")
// //   await page.getByRole('button',{name:'Get XPath cheat sheet'}).click();
// //     await page.pause();
// // })

// //getbyid
// // test('validate testid',async({page})=>{
// //   await page.goto("https://automationexercise.com/login")
// //   await page.pause()
// //  await page.getByTestId('login-email').fill('priyaaaaaaa')
// //   await page.getByTestId('login-password').fill('yghjg@gamil.com')
// //   await page.pause()
// // })

// // test('validate testid',async({page})=>{

// // await page.goto("https://testautomationpractice.blogspot.com/")
// // //id #
// // // await page.locator('textarea').fill("hjghjghjg")
// // // await page.pause()
// // //. class
// // await page.locator('.form-control').nth(1).fill("hjghjghjg")
// // await page.pause()
// // })
// // //attribute //[type="text"]

// // test('validate attribute',async({page})=>{

// //     await page.goto("https://adactinhotelapp.com/")
// //     await page.locator('[type="text"]').fill('Rudhvikriyan')
// //     await page.locator('[type="password"]').fill('Rudhvikriyan')
// //     await page.pause()

// //     })
// //TASK1
// test('validate getbypaceholder',async({page})=>{
//     await page.goto("https://demoqa.com/text-box")
//    await page.getByPlaceholder('Full Name').fill('priya')
//     await  page.getByPlaceholder('name@example.com').fill('abc@gmail.com')
//    await page.locator('[placeholder="Current Address"]').fill('chennai')
//   await page.pause()

// })

// //TASK 2
// test('Validate buttons', async({page})=>{
// await page.goto("https://demoqa.com/buttons")
// let btn:Locator=page.getByRole('button',{name:"Click Me",exact:true});
// btn.click()
// await page.pause()
// let dblbtn:Locator= page.locator("#doubleClickBtn")
// await dblbtn.dblclick()
// page.waitForTimeout(5000)
// await dblbtn.click(({button:'right'}))
// await page.pause()
// })

// //TASK 3
// test('validate label',async({page})=>{
//     await page.goto("https://the-internet.herokuapp.com/login")
//    await page.pause()
//   await page.getByLabel('Username').fill('RIYANN')
//    await page.getByLabel('Password').fill('ytyugt')
//    await page.getByRole('button',{name:" Login"}).click()
//    await page.pause()
// })

// //TASK 4
// test ('validate the checkboxes',async({page})=>{
//     await page.goto("https://the-internet.herokuapp.com/checkboxes")
//      await page.pause()
//     await  page.locator("#checkboxes").nth(0).check()
//      await page.pause()
// //    // await  page.locator('#checkboxes').first().check()
// //     await  page.locator(" checkbox 1").last().check(),
// //     await page.pause()
// })
// //TASK 5
// test.only('validate getbytestid',async({page})=>{
//     await page.goto("https://accounts.saucelabs.com/am/XUI/#login/")
//     await page.pause()
//     await page.getByLabel('User Name').fill('RIYAN')//cant use testid

//     await page.getByLabel('Password').fill('yfyugfhj')
//     await page.locator('.login__actions').click();
//     await page.pause()
// })
// //TASK 8//doubt
// test('validate google search', async ({ page }) => {
//     await page.goto("https://www.google.com/")
//     await page.getByRole('combobox').fill('updates')
//     await page.pause()
//     await page.getByRole('button', { name: 'Google Search' }).click()
//      await page.pause()
    
// })

// // //TASK 9 
// test('validate youtybe', async ({ page }) => {
//     await page.goto("https://www.youtube.com/")
//     await page.getByPlaceholder('Search').fill('songs')
//     await page.pause()
//     await page.locator('.ytSearchboxComponentSearchButton').click()
//     let logo: Locator = page.getByRole('link', { name: /YouTube/ })
//     await expect(logo).toBeVisible();
//     await page.pause()
// })


// //TASK 10
// test.only('validate amazon',async({page})=>{
//     await page.goto("https://www.amazon.in/")
//     await page.pause()
//     await page.getByPlaceholder('Search Amazon.in').fill('phone')
//      await page.locator("input[type='submit']").click()
//       await page.pause()
//     await page.locator('#nav-logo-sprites').click()
//     await page.pause()
//     //await expect(cdra).toBeVisible();
//})

//TASK11
//  test.only('validate flipkart',async({page})=>{
//     await page.goto("https://www.flipkart.com/")
//     let box:Locator= page.getByRole('textbox')
//     await box.fill('mobile')
//     await  page.pause()
//     await page.getByRole('link',{name:'Login'}).click();
//     await page.pause()
// })

// //TASK 12
// test('validate flipkart', async ({ page }) => {
//     await page.goto("https://www.wikipedia.org/")
//     await page.getByRole('searchbox').fill('WORLD')
//     await page.pause()
//     let d: Locator = page.locator('.central-textlogo')
//     await expect(d).toBeEnabled()
//     page.getByRole('link', { name: /English/ }).click();
//     await page.pause()
// })

// //TASK 13
// test.only('validate linkedin', async ({ page }) => {
//     await page.goto("https://www.linkedin.com/login/?trk=guest_homepage-basic_nav-header-signin")
//     await page.locator('#«Refvl3ksopa55j6»').fill('priya')
//     await page.locator('#«R2nvl3ksopa55j6»').fill('priya')
//     await page.pause()
//     // await page.getByRole('button',{name:"Sign in"}).click()//doubt
//     await page.pause()
//     // page.getByRole('link',{name:'Join now',exact:true})
//     // await page.pause()
//})

//TASK 14

// test('validate linkedin',async({page})=>{
//     await page.goto("https://www.naukri.com/")
//     await page.pause()
//     await page.getByPlaceholder("Enter skills / designations / companies").fill('Playwright ')
//      await page.locator('.qsbSubmit').click()
//    await page.pause()
//     await page.locator('#login_Layer').click()
//   //await page.getByRole("link",{name:'login_Layer'}).click();//doubt wecant get getByRole
//    await page.pause()
//        })

// //TASK 15
test('validate linkedin', async ({ page }) => {
    await page.goto("https://www.irctc.co.in/nget/train-search")
    await page.pause()

    let a: Locator = page.getByLabel('Enter From station')

    await a.fill('chennai')
    let e: Locator = page.getByLabel('Enter To station. Input is Mandatory.')
    await e.fill('Bangalore')
    // await page.locator('.search_btn train_Search').click()
    // await page.pause()
    await page.getByText(' CONTACT US ').click()
    await page.pause()

})



