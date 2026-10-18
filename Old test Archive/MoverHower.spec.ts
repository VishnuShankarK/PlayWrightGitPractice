import {expect, test} from '@playwright/test'


test("MouseHower1", async({page})=>{

await page.goto ("https://www.rogers.com/")
await page.getByRole('button', { name: 'TV & Streaming' }).hover()
await page.getByRole('link', { name: 'Channels & Theme packs' }).click()


})


test("DragandDrop1", async({page})=>{

// await page.goto ("https://demoqa.com/droppable")
// await page.getByRole('tabpanel', { name: 'Simple' }).getByText('Drag Me').hover()
// await page.mouse.down()
// await page.getByRole('tabpanel', { name: 'Simple' }).locator('#droppable').hover()
// await page.mouse.up()
// await expect (page.getByRole('tabpanel', { name: 'Simple' }).locator('#droppable')).toHaveText('Dropped!')

await page.goto ("https://demoqa.com/droppable")
await page.getByRole('tabpanel', { name: 'Simple' }).getByText('Drag Me').dragTo(page.getByRole('tabpanel', { name: 'Simple' }).locator('#droppable'),{force:true})
test.slow()
await expect (page.getByRole('tabpanel', { name: 'Simple' }).locator('#droppable')).toHaveText('Dropped!')
})


test("PressOption", async({page})=>{

await page.goto ("https://testpages.eviltester.com/pages/forms/html-form/")
const commentsection = page.locator("//*[@name = 'comments']")
// await commentsection.click()
await commentsection.press("Meta+a")
await commentsection.press("Backspace")
await commentsection.press("V+I+S+H+N+U")
await commentsection.press("Meta+a+x")
const unamef = page.locator('input[name="username"]')
// await unamef.click()
await unamef.press("Meta+v")
await page.keyboard.press("PageDown")

})

test("Fileupload", async({page})=>{

await page.goto ("https://davidwalsh.name/demo/multiple-file-upload.php")
// const singlefile = page.getByRole('button', { name: 'Choose File' })
// await singlefile.setInputFiles("File uploadTest/sample.txt")

await page.getByRole('button', { name: 'Choose File' }).setInputFiles(["File uploadTest/sample.txt", "File uploadTest/sample1.txt"])
test.setTimeout(5000)
await page.getByRole('button', { name: 'Choose File' }).setInputFiles([])


})


test("FileUploadUsingLisener", async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/upload")
    const filechooserPromise = page.waitForEvent("filechooser")
    await page.locator('#drag-drop-upload').click()
    const filechoosef = await filechooserPromise
    await filechoosef.setFiles("File uploadTest/sample.txt")




})




