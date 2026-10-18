import {test} from '@playwright/test'
import {devonjval} from '../playwright.config.js'
import dotenv from 'dotenv'


test("Learning Multiple Enviroment", async({page})=>{
    await page.goto(devonjval.URL)
    await page.locator('[data-test="username"]').fill(devonjval.UserName)
    await page.locator('[data-test="password"]').fill(devonjval.Password)
    await page.locator('[data-test="login-button"]').click()


})

test("Learning Multiple Enviroment1", async({page})=>{

    await page.goto(process.env.URL)
    await page.getByRole('combobox', { name: 'Search' }).fill("Playwright")
    await page.getByRole('combobox', { name: 'Search' }).press("Enter")


})  