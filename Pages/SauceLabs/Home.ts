import {Locator, Page} from "@playwright/test"
export class Homepage {

    // Declaration
    readonly page: Page
    readonly addtoCartbutton: Locator
    readonly removeFromCart : Locator
    readonly shoppingBag: Locator


    constructor(page:Page){
// Intiation
        this.page = page
        this.addtoCartbutton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.removeFromCart = page.locator('[data-test="remove-sauce-labs-backpack"]')
        this.shoppingBag = page.locator('[data-test="shopping-cart-link"]')
    }


    // Method(Action)

    async addItemToCart(){

       await this.addtoCartbutton.click()

    }

   async removeItemFromCart(){

    await this.removeFromCart.click()

    }

       async checkShoppingBag(){

    await this.shoppingBag.click()

    }

}