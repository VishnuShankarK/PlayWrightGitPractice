
import { Locator, Page } from "@playwright/test";


export class Login{

  readonly  page:Page
    readonly Username: Locator
   readonly Password : Locator
    readonly login:Locator

    constructor(page:Page){
        this.page = page
        this.Username = page.getByRole('textbox', { name: 'Username' })
        this.Password = page.getByRole('textbox', { name: 'Password' })
        this.login = page.getByRole('button', { name: 'Login' })

    }


    async logon(Username:string,Password:string){

       await this.Username.fill(Username)
       await this.Password.fill(Password)
      await  this.login.click()

    }

   async loadpage(url:string){

       await this.page.goto(url)

    }


}
