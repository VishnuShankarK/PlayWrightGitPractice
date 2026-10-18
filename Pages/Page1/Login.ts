import {Locator, Page} from '@playwright/test'

export class Login {

    readonly page:Page
    readonly Username : Locator
    readonly Password :Locator
    readonly Login:Locator
    


    constructor(page:Page){
        this.page = page
        this.Username = page.locator('[data-test="username"]')
        this.Password = page.locator('[data-test="password"]')
        this.Login = page.locator('[data-test="login-button"]')

    }

    async loginmethod(username:string,password:string){

      await  this.Username.fill(username)
      await  this.Password.fill(password)
      await this.Login.click()
     
    }

   async loadpage(url:string){

       await this.page.goto(url)

    }

}