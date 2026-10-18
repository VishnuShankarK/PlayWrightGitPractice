import {test} from '@playwright/test'

let Aukeyvalue1:any
test.beforeEach ("Getting the Autho Key", async ({request})=>{

    const AuKey = await request.post("https://restful-booker.herokuapp.com/auth", {
        headers: {
            "Content-Type" : "application/json"
        },
        data: {
                "username" : "admin",
                "password" : "password123"
        }

    })
     const Aukeyvalue = await AuKey.json()
     Aukeyvalue1 = Aukeyvalue.token
    console.log(Aukeyvalue)
    console.log(Aukeyvalue.token)
    

})

test( "Getting the values using the key generated", async({request})=>{

    const req = await request.put("https://restful-booker.herokuapp.com/booking/6",{
        headers:{
            Accept: "application/json",
            Cookie : 'token=' + Aukeyvalue1
        },
            data:{ 
                "firstname": "SusanVishnu",
                "lastname": "Smith",
                "totalprice": 287,
                "depositpaid": true,
                "bookingdates": {
                "checkin": "2026-06-26",
                "checkout": "2026-08-29"
                }
        },
    })

    const reqvalue = await req.json()
    console.log(reqvalue)


})