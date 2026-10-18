import {expect, test} from '@playwright/test'
import patchdata from '../Testdata/pathwithJsonfile.json'

test("LearnPutMethod", async({request})=>{


    const newvalue = await request.put("https://restful-booker.herokuapp.com/booking/1", 
        {headers: {
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM=",
            Cookie: "token=<token_value>",
            Accept: "application/json"
        },
        data:{
             "firstname" : "James",
             "lastname" : "Brown",
             "totalprice" : 111,
            "depositpaid" : true,
             "bookingdates" : {
             "checkin" : "2018-01-01",
            "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Dinner and Lunch"
        }
    })

    // console.log(newvalue)
    const newvaluejson = await newvalue.json()
    console.log(newvaluejson)





})

test("learnPatchRequest", async({request})=>{

    const patchRequest = await request.patch("https://restful-booker.herokuapp.com/booking/1", {
        headers:{
             Accept: "application/json",
            "Content-Type" : "application/json",
          Authorization  : "Basic YWRtaW46cGFzc3dvcmQxMjM="
            

        },
         data: patchdata
         
    })
    const patchrequestjson = await patchRequest.json()
    console.log(patchrequestjson)




})


test("LearnDeleteAPI", async({request})=>{

   const dele = await request.delete("https://restful-booker.herokuapp.com/booking/2",
        {headers:{
            Authorization : "Basic YWRtaW46cGFzc3dvcmQxMjM="
        }

        }
        )
        expect(dele.status()).toBe(201)

   const deleteval = await request.get("https://restful-booker.herokuapp.com/booking/1",
        {headers:{
            Authorization : "Basic YWRtaW46cGFzc3dvcmQxMjM="
        }

        }
    )    

    const deletevaluejson = await deleteval.text()

    console.log(deletevaluejson)

})


test ("GetHeaderdetails",async({request})=>{

    const fulldetails = await request.get ("https://restful-booker.herokuapp.com/booking/5",
        {headers: {
            Authorization : "Basic YWRtaW46cGFzc3dvcmQxMjM="
        }
       
    })

    const header =  fulldetails.headers()
    //    console.log(header)

    const hearderAry = fulldetails.headersArray()
    // console.log(hearderAry)
    const hearderval = hearderAry.find((headerdat) =>{
        if(headerdat.name === 'Date'){
            return (headerdat.value)
        }
            
    })
   console.log(hearderval) 
})