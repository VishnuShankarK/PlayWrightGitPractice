import {test,expect} from '@playwright/test'
import { request } from 'node:http'


test("PostApi1",async({request})=>{

    // const getdetails = await request.get("https://restful-booker.herokuapp.com/booking",
    //     {headers: {Accept:"application/json"}})
    //     console.log(await getdetails.json())

        const postrequest = await request.post("https://restful-booker.herokuapp.com/booking", {
            headers:{
                Accept:"application/json"
            },
            data: 
                {
                "firstname" : "Jim",
                "lastname" : "Brown",
                "totalprice" : 111,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2018-01-01",
                    "checkout" : "2019-01-01"
                }}

        
        
        })
        expect (postrequest.status()).toBe(200)
        expect (postrequest.statusText()).toBe('OK')
        const newpostedVal = await postrequest.json()
        console.log(await postrequest.json())
        console.log(newpostedVal.booking.firstname)
        expect (newpostedVal.booking.firstname).toContain('Jim')
        expect (newpostedVal.booking).toMatchObject({
                firstname: 'Jim',
                lastname: 'Brown',
                totalprice: 111,
                depositpaid: true,
                bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' }
        })


})  

test("postApiLiveExample",async({page,request})=>{

    await page.goto("https://demoblaze.com/index.html")
    await page.getByRole('link', { name: 'Log in' }).click()
    await page.locator('#loginusername').fill("Vishnu0708")
    await page.locator('#loginpassword').fill("12345")
    await page.getByRole('button', { name: 'Log in' }).click()

    await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toHaveText('PRODUCT STORE')
    
    const cookie = await page.context().cookies()
    
    const cookieUser = cookie.find((value) =>{
        return value.name === 'user'
    })

    // console.log(cookie)
    // console.log(cookieUser)
    // console.log(cookieUser?.value)
    await page.getByRole('link', { name: 'Nexus' }).click()
    await expect(page.getByRole('heading', { name: 'Nexus' })).toHaveText('Nexus 6')
    const UUID = crypto.randomUUID()


    // await page.getByRole('link', { name: 'Add to cart' }).click()
    const webpagePhone = await request.post("https://api.demoblaze.com/addtocart", {
        data: 
       {"id": UUID,"cookie":'user = <cookieUser?.value',"prod_id":3,"flag":true} 
    })
    const webpagePhoneElement = await webpagePhone.json()
    console.log(webpagePhoneElement)
    expect (webpagePhone.status()).toBe(200)
    expect (webpagePhone.statusText()).toBe('OK')
    // console.log(cookieUser)
//     await page.getByRole('link', { name: 'Cart' }).first().click()
   const Webcartpage = await request.post("https://api.demoblaze.com/viewcart",{
        headers: 
        {"content-type": "application/json"},
        data:{"id": UUID,"cookie":cookieUser?.value,"prod_id":3,"flag":true}
        })
        // console.log(cookieUser)
        // const Webcartpageitem = await Webcartpage.json()
        // console.log(Webcartpageitem)


    })




