import {test} from '@playwright/test'



test("Learning Reporter1", async({page})=>{

    await page.goto("https://www.google.com/")
    await page.getByRole('combobox', { name: 'Search' }).fill("Playwright")
    await page.getByRole('combobox', { name: 'Search' }).press("Enter")


}) 

test("Learning Reporter2", async({page})=>{

    await page.goto("https://www.google.com/")
    await page.getByRole('combobox', { name: 'Search' }).fill("Playwright")
    await page.getByRole('combobox', { name: 'Search' }).press("Enter")


}) 

test("Learning Reporter3", async({page})=>{

    await page.goto("https://www.google.com/")
    await page.getByRole('combobox', { name: 'Search' }).fill("Playwright")
    await page.getByRole('combobox', { name: 'Search' }).press("Enter")


}) 

