import {test} from '@playwright/test'



test("Learning Reporter4", async({page})=>{

    await page.goto("https://www.google.com/")
    await page.getByRole('combobox', { name: 'Search' }).fill("Playwright")
    await page.getByRole('combobox', { name: 'Search' }).press("Enter")


}) 

test("Learning Reporter5", async({page})=>{

    await page.goto("https://www.google.com/")
    await page.getByRole('combobox', { name: 'Search' }).fill("Playwright")
    await page.getByRole('combobox', { name: 'Search' }).press("Enter")


}) 

test("Learning Reporter6", async({page})=>{

    await page.goto("https://www.google.com/")
    await page.getByRole('combobox', { name: 'Search' }).fill("Playwright")
    await page.getByRole('combobox', { name: 'Search' }).press("Enter")


}) 