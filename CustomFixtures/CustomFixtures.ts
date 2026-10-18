import {test as base} from "@playwright/test"

import {Login} from "../pages/Login"
import {Homepage} from "../pages/Home"
import {Cart} from "../pages/Cart"


type myfixtures = {

    Login:Login,
    Home:Homepage,
    Cart:Cart

}

export const test= base.extend<myfixtures>({

    Login: async({page},use)=>{

        const login = new Login(page)
        await use (login)

    },

    Home: async({page},use)=>{

        const home = new Homepage(page)
        await use(home)
    },

    Cart: async({page},use)=>{

        const cart = new Cart(page)
        await use(cart)

    }

})