import {Locator, Page} from '@playwright/test'


export class Checkout{

    readonly page:Page
    readonly checkout :Locator



    constructor(page:Page){

        this.page=page
        this.checkout= page.locator('[data-test="checkout"]')

    }


    async checkoutmethod(){

       await this.checkout.click()


    }

}