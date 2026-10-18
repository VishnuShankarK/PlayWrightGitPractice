import {test as base} from "@playwright/test"
import {Home} from "../Pages/Orange/Home"
import {Login} from "../Pages/Orange/Login"
import {Recruitment} from "../Pages/Orange/Recruitment"
import {test as fixturetest} from "../CustomFixtures/OrangeLoginFixture"

type myfixture = {

    Home:Home
    Login:Login
    Recruitmnet:Recruitment 

}

export const test = fixturetest.extend<myfixture>({

    Home: async({page},use)=>{

        const homeobj = new Home(page)
        await use(homeobj)

    },

    Login: async({page,Username,Password},use)=>{
        const loginobj = new Login(page)
        await loginobj.loadpage('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        await loginobj.logon(Username,Password)
        await use(loginobj)
    },

    Recruitmnet: async({page},use)=>{
        const recruitobj = new Recruitment(page)
        await use(recruitobj)
    }

})

