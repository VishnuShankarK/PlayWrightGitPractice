import {test as fixturetest} from "@playwright/test"

type userlogin = {

    Username:any
    Password:any

}

export const test = fixturetest.extend<userlogin> ({

    Username: async({page},use)=>{
        await use("Admin")
    },
    
    Password: async({page},use)=>{

        await use("admin123")

    }

})