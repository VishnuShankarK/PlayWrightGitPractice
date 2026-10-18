import {test,expect} from "@playwright/test"




   

test("dialoghanding1", async({page})=>{ 
    test.slow()
    page.on('dialog', dialog =>{

    expect (dialog.type()).toEqual('alert')
    expect (dialog.message()).toEqual('I am a JS Alert')
    dialog.accept()
    })
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.getByRole('button', { name: 'Click for JS Alert' }).click()

})

test("dialogLearning2",async({page})=>{
    test.slow()
    page.on("dialog", dialog1 =>{

        expect(dialog1.type()).toEqual('confirm')
        expect(dialog1.message()).toEqual('I am a JS Confirm') 
        // dialog1.accept();
        dialog1.dismiss();



    })




    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.getByRole('button', { name: 'Click for JS Confirm' }).click()

})

test ("dialogLearning3", async({page})=>{
    test.slow()
    page.on("dialog",dialog2=>{

        expect(dialog2.type()).toEqual("prompt")
        expect(dialog2.message()).toEqual("I am a JS prompt")
        dialog2.accept("Prompt learning")

    })


        await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
        await page.getByRole('button', { name: 'Click for JS Prompt' }).click()

})