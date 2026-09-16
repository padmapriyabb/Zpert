import test,{expect, Locator} from  "@playwright/test";

// test.skip("validate click method",async({page})=>{
//  await  page.goto("https://testautomationpractice.blogspot.com/")
// let btn:Locator=page.getByRole("button",{name:"start"});
// //await btn.click()  //single click
// // await btn.dblclick()
// //  await expect(btn).toBeEnabled()
// // await page.pause()
// await btn.click({button:"right"})
// await page.waitForTimeout(5000)
// await page.pause()
// })

// test("validate fill",async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/")
//   let namefield:Locator= page.locator('#name')
//   await expect(namefield).toBeVisible()
//      await namefield.fill('riyan')
    
//     console.log(await namefield. inputValue());//givin value in webpage it display in termainal page
//   let maxlength=await  namefield.getAttribute('maxlength')//get value from web element and orint in terminal
//   console.log(maxlength)
//      await  page.pause()

// });

// test('validate check and uncheck',async({page})=>{
//   await page.goto('https://testautomationpractice.blogspot.com/')
// let malebtn:Locator=page.locator('#male')
// malebtn.check()

// })

// //TASK 1
// test('Validate click actions',async({page})=>{
//    await page.goto("https://demoqa.com/buttons")
//     await page.pause()
//    let btn1:Locator= page.getByRole('button',{name:'Click Me',exact:true})
//    await btn1.click()
//   let btn:Locator= page.locator('#doubleClickBtn')
  
//   await btn.dblclick()
// let right:Locator=  page.locator('#rightClickBtn')
//    await  right.click({button:"right"})
//     await page.pause()
//     await expect(btn).toBeEnabled()
// })
// //TASK 2
// test('Validate Fill actions',async({page})=>{
//    await page.goto("https://demoqa.com/text-box")
//     await page.pause()
//    await page.locator('#userName').fill('RIYAM')
//    await page.pause()
//    await page.locator('#userEmail').fill('RIYAM@1234')
//    await page.locator('#currentAddress').fill('Chennai ')
//     await page.locator('#permanentAddress').fill('Tambaram Chennai ')
//     await page.locator('#submit').click()
//    await page.pause()
// })
// // TASK 3
// test('Validate Checkbox actions',async({page})=>{
//    await page.goto("https://demoqa.com/checkbox")
//     await page.pause()
//     await  page.getByLabel('Select Desktop').check()
//     await  page.getByLabel('Select Excel File.doc').check()
//     await  page.getByLabel('Select WorkSpace').check()
//     await page.pause()
//     await  page.getByLabel('Select Excel File.doc').uncheck()
//     await  page.getByLabel('Select WorkSpace').uncheck()
//      await page.pause()
// })
// // TASK 4
// test.only('Validate Radiobutton actions',async({page})=>{
//    await page.goto("https://demoqa.com/radio-button")
//     await page.pause()
//     await page.locator('#yesRadio').check()
//       await page.pause()
//     await page.locator('#impressiveRadio').check()
//       await page.pause()
// })
//TASK 5
// test('Validate select ststic actions',async({page})=>{
//    await page.goto("https://demoqa.com/select-menu")
//     await page.pause()
    
//    let dropdown:Locator= page.locator("#oldSelectMenu>option")
//        console.log(await dropdown.count())
// //   await dropdown.selectOption("Black")
// //     await page.pause()
// //     await dropdown.selectOption([{index:3},{value:'Yello'}]);
// //      await page.pause();
// //    await dropdown.selectOption({index:1})
// //      await page.pause()
// //     await dropdown.selectOption({label:"Red"})
// //         await page.pause();
// //         console.log(await dropdown.count())
//  })
//TASK 6
// test.only('Validate select ststic actions',async({page})=>{
//    await page.goto("https://demoqa.com/select-menu")   
//     await  page.locator("#react-select-4-placeholder").click() 
//     await page.pause()
//      await  page.locator("#react-select-4-option-0").click() 
//  })

//     test.only('Validate select ststic actions',async({page})=>{
//    await page.goto("https://demoqa.com/select-menu")   
//   let multi= page.locator("#cars")
//  await multi.selectOption([{label:'Volvo'},{label:'Saab'},{label:'Opel'}])
//      await page.pause()
//      await expect(multi).toBeVisible();
//        });


//Task 14
// test.only('Validate HRM login',async({page})=>{
//  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")  
//  await page.pause() 
//  let name=await page.getByLabel('Username').fill('Admin')
//  let pswd =await page.getByLabel('Password').fill('admin123')
//  await page.pause()
//  await page.getByRole('button',{name:"submit"}).click()
//  await page.pause()
// })
    
//TASK
// test.only('Validate Wikipedia ',async({page})=>{
//  await page.goto("https://www.wikipedia.org/")  
//  await page.pause()  
//  await page.locator('.screen-reader-text').fill('Playwright action')
// let log=await page.getByRole('button',{name:"submit"}).click()
// // await page.locator('.pure-button pure-button-primary-progressive').click()
// await page.pause()  
// })


 test.only('Validate the simple alert ',async({page})=>{
 await page.goto("https://testautomationpractice.blogspot.com/")  
 await page.pause()  
 page.on('dialog', async dailog=>{ dailog.accept()})
await page.locator('#alertBtn').click()
await page.waitForTimeout(5000)
 //await page.pause() 
})