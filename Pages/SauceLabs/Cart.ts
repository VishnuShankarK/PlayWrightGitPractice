import {Locator, Page} from '@playwright/test'


export class Cart {

    readonly page:Page
    readonly shoppingbag: Locator
    readonly checkout : Locator

    constructor(page:Page){
        this.page = page
        this.shoppingbag = page.locator('[data-test="shopping-cart-link"]')
        this.checkout = page.locator('[data-test="checkout"]')

    }


    async cartcheckout(){

    await this.checkout.click()

    }


}