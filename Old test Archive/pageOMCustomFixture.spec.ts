import {expect} from '@playwright/test'
import {test} from '../CustomFixtures/CustomFixtures'


test("loginusingPOM", async({page, Login, Home, Cart})=>{

   await Login.loadpage("https://www.saucedemo.com/")
   await Login.loginfuc('standard_user','secret_sauce')
   await Home.addItemToCart()
   await Home.checkShoppingBag()
   await expect (page.locator('[data-test="shopping-cart-link"]')).toHaveText('1')
   await expect(page.getByText('Swag Labs')).toHaveText('Swag Labs')
   await expect(page.locator('[data-test="shopping-cart-link"]')).toHaveText('1')
   await Cart.cartcheckout()
   
})
