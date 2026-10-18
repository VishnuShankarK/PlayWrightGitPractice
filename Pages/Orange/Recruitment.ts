import {Locator, Page} from "@playwright/test"

export class Recruitment{

   readonly page:Page
   readonly Recruit: Locator
   readonly Add:Locator
   readonly Firstname:Locator
   readonly Middlename:Locator
   readonly Lastname:Locator
   readonly Email:Locator 
   readonly save:Locator

    constructor(page:Page){

        this.page=page
        this.Recruit = page.getByRole('link', { name: 'Recruitment' })
        this.Add = page.getByRole('button', { name: ' Add' })
        this.Firstname =page.getByRole('textbox', { name: 'First Name' })
        this.Middlename =page.getByRole('textbox', { name: 'Middle Name' })
        this.Lastname = page.getByRole('textbox', { name: 'Last Name' })
        this.Email = page.getByRole('textbox', { name: 'Type here' }).first()
        this.save = page.getByRole('button', { name: 'Save' })

    }

  async  Addcandidates(Firstname:string,Middlename:string,Lastname:string,Email:String){

       await this.Recruit.click()
       await this.Add.click()
       await this.Firstname.fill(Firstname)
       await this.Middlename.fill(Middlename)
       await this.Lastname.fill(Lastname)
       await this.Email.fill(Email)
        await this.save.click()
        

    }


}
