import { expect, firefox, test } from '@playwright/test'


test.beforeEach("Learning BeforeEach", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/")
    await page.locator("//*[@placeholder= 'Username']").fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    console.log("This is before each test")
})



test.afterAll("LearingAfterAll", async ({ page }) => {

    await page.getByRole('button', { name: 'Open Menu' }).click()
    await page.locator('[data-test="logout-sidebar-link"]').click()
    console.log("closing the site after all the test execution")

})
test.describe('Maincases', async () => {

    test("Learning Ammotation", async ({ page, browserName }) => {
        test.setTimeout(13000)
        // await page.goto("https://www.saucedemo.com/")

        await page.locator("//*[@type='submit']").click()

    })
    test.afterEach("learningAfterEach", async ({ page }) => {

        await expect(page.locator('[data-test="title"]')).toHaveText('Products')
        console.log("After eash methof :)")

    })

})

test("learningcss", async ({ page }) => {
    // await page.goto("https://www.saucedemo.com/")
    // await page.locator("//*[@placeholder= 'Username']").fill('standard_user')
    // await page.locator('#password').fill('secret_sauce')
    await page.locator("//*[@type='submit']").click()
    await page.locator("#add-to-cart-sauce-labs-backpack ").click()

})

test("Assertion", async ({ page }) => {

    // await page.goto("https://www.saucedemo.com/")
    await expect(page.locator(".login_logo")).toHaveText('Swag Labs')
    // await page.locator("//*[@placeholder= 'Username']").fill('standard_user')
    // await page.locator('#password').fill('secret_sauce')
    await page.locator("//*[@type='submit']").click()
    await page.locator("#add-to-cart-sauce-labs-backpack").click()

})

