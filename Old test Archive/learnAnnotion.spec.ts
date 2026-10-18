import {test, expect, Page} from '@playwright/test'

    let page : Page

test.beforeAll("login",async({browser})=>{

    page = await browser.newPage()
    await page.goto("https://www.saucedemo.com/")
    await expect(page.locator('.login_logo')).toHaveText('Swag Labs')
    console.log("In Before all Test")

})

test.beforeAll("SigninUser", async({browser})=>{

     page = await browser.newPage()

    await page.goto("https://www.saucedemo.com/")
    await page.locator('#user-name').fill('standard_user')
    await page.locator("//*[@aria-label = 'Password']").fill('secret_sauce')
    await page.locator ('#login-button').click()
    
    console.log("In Before EACH BOX")
})

test("Add item to the cart",async({})=>{

    await expect (page.getByText('Swag Labs')).toHaveText('Swag Labs')
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toHaveText('Remove')
    
})

test("Cartpage",async({})=>{
    // await expect (page.getByText('Swag Labs')).toHaveText('Swag Labs')
    // await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    // await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toHaveText('Remove')
    await expect(page.locator('[data-test="shopping-cart-link"]')).toHaveText('1')
    await page.locator('[data-test="shopping-cart-link"]').click()

})

test.afterAll("Logoff",async({})=>{
    test.slow()
 await page.getByRole('button', { name: 'Open Menu' }).click()
 await page.locator('[data-test="logout-sidebar-link"]').click()
 console.log("Ligginnnggggg Offffffff")

})