import {Locator, Page} from "@playwright/test"

export class Home{

    readonly page:Page
    readonly Admin: Locator
    readonly Username : Locator
    readonly Search:Locator 

    constructor(page:Page){

        this.page=page
        this.Admin = page.getByRole('link', { name: 'Admin' })
        this.Username = page.getByRole('textbox').nth(1)
        this.Search= page.getByRole('button', { name: 'Search' })

    }

   async search(Username:string){
        await this.Admin.click()
        await this.Username.fill(Username)
        await this.Search.click()

    }


}
