import test,{expect, Locator,Dialog} from  "@playwright/test";

//  test.only('Validate the simple alert ',async({page})=>{
//  await page.goto("https://testautomationpractice.blogspot.com/")  
//  await page.pause()  
//  page.on("dialog", async dailog=>{await dailog.accept()
//  let msg=dailog.message();
//   console.log(msg)
//  let type= dailog.type()
//   console.log(type)
//   expect(type).toContain('alert')
// await page.pause() 
// })
// await page.locator('#alertBtn').click()
// })

// test.only('Validate the confirm alert ',async({page})=>{
//  await page.goto("https://testautomationpractice.blogspot.com/")  
//  await page.pause()  
//  page.on("dialog", async(dailog) =>{await dailog.dismiss()
//  console.log(dailog.defaultValue());
//  console.log(dailog.message())
//  console.log(dailog.type())
// })
//    await page.locator('#confirmBtn').click()
//   let text= await page.locator('#demo').innerText()
//   console.log(text);
// })

// test.only('Validate the confirm alert ',async({page})=>{
//  await page.goto("https://testautomationpractice.blogspot.com/")  
//  await page.pause()  
//  page.on("dialog", async (dailog)=>{
//   await dailog.accept("Rudhvik riyannn");
//  console.log(dailog.defaultValue()) 
//   console.log(dailog.message()) 
//    console.log(dailog.type()) 
//  })
//     await page.locator('#promptBtn').click()
//   let inner= await page.locator('#demo').innerText()
//   console.log(inner)
//   })

test.only('Handling all alerts ',async({page})=>{
 await page.goto("https://testautomationpractice.blogspot.com/")  
 await page.pause()
 page.on("dialog",async(dailog)=>{

 

})
 
})
