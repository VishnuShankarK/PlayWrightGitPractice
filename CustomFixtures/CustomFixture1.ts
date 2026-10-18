import {test as base,expect} from '@playwright/test'
import {Login} from '../Pages/Page1/Login'
import {Home} from '../Pages/Page1/Home'
import {Checkout} from '../Pages/Page1/Checkout'
import data1 from '../Testdata/testdata1.json'

type Myfixtures = {

    Login : Login
    Home : Home
    Checkout: Checkout

}


export const test = base.extend <Myfixtures>({

    Login: async({page},use)=>{
    const loginonj = new Login(page)
    await loginonj.loadpage('https://www.saucedemo.com/')
    await loginonj.loginmethod(data1.username,data1.password)
    await use(loginonj)

    
    },

    Home: async({page},use)=>{
    const homeonj = new Home(page)
    await use(homeonj)

    },

    Checkout: async({page},use)=>{
    const checkoutObj = new Checkout(page)
    await use(checkoutObj)

    }


    })