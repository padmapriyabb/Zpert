import test,{expect, Locator,Dialog, FrameLocator,Frame} from  "@playwright/test";
//Frame Locator
// test.only('Validate the simple alert ',async({page})=>{
// await page.goto("https://demo.automationtesting.in/Frames.html#google_vignette")  
//   await page.pause()  
//  let singleframe:FrameLocator= page.frameLocator('#singleframe')
//         let framebox= singleframe.getByRole('textbox')
//         await framebox.fill('rudhvik')
//         console.log(await framebox.inputValue())
//        await page.pause()
// })
//Frame()
// test.only('Validate the simple alert ',async({page})=>{
// await page.goto("https://the-internet.herokuapp.com/iframe")  
//   await page.pause()  
//  let framer:Frame |null= page.frame({url:"https://the-internet.herokuapp.com/iframe"});
//  let value=await framer?.getByRole("paragraph").innerText()
//  console.log(value);
// })
//Frame if else
//  test.only('Validate the simple alert ',async({page})=>{
// await page.goto("https://the-internet.herokuapp.com/iframe")  
// await page.pause()  
 //Frame()
// let frame:Frame |null= page.frame({url:"https://the-internet.herokuapp.com/iframe"});
//FrameLocator
//   let frame=page.frameLocator('#mce_0_ifr')
//   if(frame)
//   {
//     let value=await frame?.getByRole("paragraph").innerText()
//  console.log(value);
//   }
//   else{
//     console.log("nO farmes")
//   }
//  })
//Frames()
//  test.only('Validate the simple alert ',async({page})=>{
// await page.goto("https://the-internet.herokuapp.com/nested_frames")  
// await page.pause()  
// let frames:Frame[]=page.frames();
// console.log(frames)
// for(let a of frames)
// {
//     console.log(a.url())
// }
// })
//parent to child frame
test.only('Validate the simple alert ',async({page})=>{
await page.goto("https://the-internet.herokuapp.com/nested_frames")  
await page.pause()  
let parentframe=page.frame({name: "frame-top"})
let childFrames=parentframe?.childFrames();
console.log("CHILDFRAME",childFrames?.length);
if(childFrames)
{
    for(let c of childFrames)
        console.log(c.url())
}

})
