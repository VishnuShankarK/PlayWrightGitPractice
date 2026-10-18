import { test } from '../../CustomFixtures/CustomFixture1'
import { expect } from '@playwright/test'

test("Login", async({page,Login,Home,Checkout})=>{
        test.slow()
        await expect (page.getByText('Swag Labs')).toHaveText('Swag Labs')
        await expect (page.locator('[data-test="item-4-title-link"]')).toHaveText('Sauce Labs Backpack')
        await Home.addItemToCart()
        await Checkout.checkoutmethod()



})


test("Logoff", async({page,Login})=>{
        test.slow()
        await expect (page.getByText('Swag Labs')).toHaveText('Swag Labs')
        await expect (page.locator('[data-test="item-4-title-link"]')).toHaveText('Sauce Labs Backpack')



})