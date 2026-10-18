import {Locator, Page} from '@playwright/test'

export class Login{

    // Declartion
    readonly page:Page
    readonly Usernamefield : Locator
    readonly Passwordfield : Locator
    readonly Loginbutt: Locator

// Initialization
    constructor(page:Page){

        this.page = page
        this.Usernamefield = page.locator('[data-test="username"]')
        this.Passwordfield = page.locator('[data-test="password"]')
        this.Loginbutt = page.locator('[data-test="login-button"]')
    }

// Methods to perform the action
    async loginfuc(username:string,password:string){

         await this.Usernamefield.fill(username)
         await this.Passwordfield.fill(password)
         await this.Loginbutt.click()
            
    }

    // Method to perform the action to go to the page

    async loadpage(url:string){

        await this.page.goto(url)

    }
}