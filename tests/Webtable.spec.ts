import test, { expect, Locator } from "@playwright/test";

// test('Validate select ststic actions',async({page})=>{
//  await page.goto("https://testautomationpractice.blogspot.com/")   
// await page.pause()
// let table:Locator=page.locator('table[name="BookTable"]')
// await expect(table).toBeVisible()
// await page.pause()
//})
//TASK 1,2,3
// test('Validate select ststic actions',async({page})=>{
//  await page.goto("https://demoqa.com/webtables")   
// await page.pause()
// let tab:Locator=page.locator('.-striped')
// await expect(tab).toBeVisible()
// const row=tab.locator('td')
// await expect(row).toHaveCount(4)
//  console.log(await row.count())
// let allrows=await row.all()
// for(let v of allrows)
// {
//     console.log(await v.innerText())
// }
// let headings =row.locator('th')
// await expect(headings).toHaveCount(7)
// console.log(await headings.allInnerTexts())

// // })
// //TASK 4

// test('Validate select ststic actions',async({page})=>{
//  await page.goto("https://demoqa.com/webtables")   
// await page.pause()
// // let enter=page.locator('#searchBox').fill('Cierra')
// //  await page.locator('#basic-addon2').click()
//  //edit
//  await page.locator('#edit-record-3').click()
//  await page.locator('#age').fill('88')
// await  page.locator('#submit').click()
//  await page.pause()
//  //delete
// await page.locator('#delete-record-1').click()
// await page.pause()
// })
test('Validate select ststic actions',async({page})=>{
 await page.goto("https://the-internet.herokuapp.com/tables")   
await page.pause()
 let table:Locator=page.locator('#table1')
// await expect(table).toBeVisible()
// await page.pause()
let totrow=table.locator('tr')
await totrow.count()
let row=totrow.all()
for(let total of await row)
{
 console.log(await total.innerText())
}
// let headings =totrow.locator('th')
// // await expect(headings).toHaveCount(7)
//  console.log(await headings.allInnerTexts())
})