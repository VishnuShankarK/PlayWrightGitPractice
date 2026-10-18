import {test,expect} from '@playwright/test'


test("Learncheck",async({page})=>{

    await page.goto("https://artoftesting.com/samplesiteforselenium")
    // await page.locator('#male').check()
    // await page.locator('#female').check()
    // await expect (page.locator('#female')).toBeChecked()
    // await page.getByRole('checkbox').first().check()
    await expect (page.getByRole('checkbox').first()).not.toBeChecked()
    await page.getByRole('checkbox').nth(1).check()
    // await page.locator('.Automation').check()
    // await expect(page.getByRole('checkbox').nth(1)).toBeChecked()

    if(await page.locator('.Automation').isChecked()){
       await page.locator('.Automation').uncheck()
    }
    else
        await page.locator('.Automation').check()

})