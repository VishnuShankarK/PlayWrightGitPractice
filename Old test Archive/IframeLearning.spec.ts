import {test,expect} from "@playwright/test"



test("LearningIframe", async({page})=>{

    await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_input_form")
    const w3pagefrmae = page.frame('iframecontainer')
    await w3pagefrmae?.locator("#fname").fill('Vishnu Shankar')
})


// test("LearningIframe1", async({page})=>{

//     await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_input_form")
//     await page.locator('iframe[name="iframeResult"]').contentFrame().getByRole('textbox', { name: 'First name:' }).fill('Using Pick Locator')

// })

// test("LearningIframe2", async({page})=>{
//     test.slow()
//     await page.goto("https://www.w3schools.com/html/html_iframe.asp")
//     const iframel = page.frame({url: 'https://www.w3schools.com/html/default.asp'})
//     await iframel?.getByRole('button', { name: 'Button to open search field' }).click()
//     await iframel?.getByRole('textbox', { name: 'Search field' }).fill('mobile')
    

// })

test("LearningIframe2", async({page})=>{
    test.slow()
    await page.goto("https://www.w3schools.com/html/html_iframe.asp")
    const frameloc = page.frameLocator("//*[@title='W3Schools HTML Tutorial']")
    await frameloc.getByRole('button', { name: 'Button to open search field' }).click()
    await frameloc.getByRole('textbox', { name: 'Search field' }).fill('Ipad')

    })