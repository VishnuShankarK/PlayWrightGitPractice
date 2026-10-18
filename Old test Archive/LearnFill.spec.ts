import {test,expect} from "@playwright/test"


test("FormFill",async({page})=>{

    // await page.goto("https://ultimateqa.com/filling-out-forms")
    // await page.locator("//*[@placeholder='Name']").first().fill('Vishnu Shankar')
    // await page.locator('#et_pb_contact_message_0').pressSequentially('Laerning Playwright for Automation',{delay:100})
        await page.goto("https://www.google.com/")
         await page.getByRole('combobox', { name: 'Search' }).pressSequentially('vishnu shankar kothandapani',{delay:100})
        await page.getByRole('combobox', { name: 'Search' }).press('ArrowDown+ArrowDown')
        await page.getByRole('combobox', { name: 'Search' }).press('Backspace')
        await page.getByRole('combobox', { name: 'Search' }).press('Enter')
        // await page.locator("//*[@placeholder='Name']").first().fill('Vishnu Shankar')
    })

    // await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_global_contenteditable")
    // await page.locator('iframe[name="iframeResult"]').contentFrame().getByText('This is a paragraph. It is').
    // fill("Leanring editable fields ")

// })