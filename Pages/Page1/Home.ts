import {Locator, Page} from '@playwright/test'


export class Home{

    readonly page:Page
    readonly addItem:Locator
    readonly removeItem:Locator
    readonly shoppingbab:Locator



    constructor(page:Page){

        this.page= page
        this.addItem = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.removeItem = page.locator('[data-test="remove-sauce-labs-backpack"]')
        this.shoppingbab = page.locator('[data-test="shopping-cart-link"]')

    }


    async addItemToCart(){

      await  this.addItem.click()
       await this.shoppingbab.click()

    }

    async removeItemToCart(){

        await this.removeItem.click()
    }
}
