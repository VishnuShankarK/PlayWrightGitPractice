import {test,expect} from "@playwright/test"


test("Click",async({page})=>{

    await page.goto("https://cps-check.com/double-click-test")
    // await page.getByRole('link', { name: 'Example code: Simple Context' }).click()
    
    // await page.getByText('right click me', { exact: true }).click({button:'right'})
    await page.getByRole('button', { name: 'Click', exact: true }).dblclick({button:'left'})
    // await page.getByRole('listitem').filter({ hasText: 'Quit' }).click()

})