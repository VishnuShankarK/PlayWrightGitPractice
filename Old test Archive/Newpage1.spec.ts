import {test,expect} from "@playwright/test"

test("LearningNewpage Handing",async({context})=>{

    const page = await context.newPage()
    await page.goto("https://testpages.eviltester.com/pages/navigation/windows-names/")
    const pagePro = context.waitForEvent('page')
    await page.locator('#gononame').click()
    const newpage = await pagePro
    await newpage.locator('#window-name-button').click()
    await expect (newpage.getByRole('heading', { name: 'Linked Page with No Window' })).toHaveText('Linked Page with No Window Name')
})