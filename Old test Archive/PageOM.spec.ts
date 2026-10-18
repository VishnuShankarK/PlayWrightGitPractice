import {test,expect} from '@playwright/test'
import {Login} from "../pages/Login"
import {Homepage} from "../pages/Home"
import {Cart} from "../pages/Cart"

test("loginusingPOM", async({page})=>{

    const loginObj = new Login(page)
    const homeobj = new Homepage(page)
    const cartobj = new Cart(page)

   await loginObj.loadpage("https://www.saucedemo.com/")
   await loginObj.loginfuc('standard_user','secret_sauce')
   await homeobj.addItemToCart()
   await homeobj.checkShoppingBag()
   await expect (page.locator('[data-test="shopping-cart-link"]')).toHaveText('1')
   await expect(page.getByText('Swag Labs')).toHaveText('Swag Labs')
   await expect(page.locator('[data-test="shopping-cart-link"]')).toHaveText('1')
   await cartobj.cartcheckout()
   
})
