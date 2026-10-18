import {test,expect} from "@playwright/test"



test("LearningDropDown",async({page})=>{

    await page.goto("https://artoftesting.com/samplesiteforselenium") 
    await page.locator('#testingDropdown').selectOption({value:'Performance'})

})


test("LearningMuliDropDown",async({page})=>{
    test.slow()
    await page.goto("https://demoqa.com/select-menu") 
    await page.locator('#cars').selectOption( ['volvo','audi','opel'])
        

})