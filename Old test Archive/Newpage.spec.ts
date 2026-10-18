import {expect, test} from "@playwright/test"


test("Newpagehandling", async({context})=>{

    const page = await context.newPage()
    await page.goto("https://testpages.eviltester.com/pages/navigation/windows-names/")
    const pagePro = context.waitForEvent('page')
    await page.locator('#gobasicajax').click()
    const newpage = await pagePro
    await newpage.locator('#window-name-button').click()
    await expect (newpage.getByRole('heading', { name: 'Linked Page with Window Name' })).toHaveText('Linked Page with Window Name')

})