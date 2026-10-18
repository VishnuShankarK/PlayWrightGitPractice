import{test,request, expect} from "@playwright/test"


let ApiGetRequestalltests

test.beforeAll("APIPullLearning", async()=>{

 ApiGetRequestalltests = await request.newContext({baseURL:'https://restful-booker.herokuapp.com',
    extraHTTPHeaders: {
        Accept: 'application/json'
    
        }})
})


test("ApiGetRequest1", async({request})=>{

const apiget1 = await request.get("https://restful-booker.herokuapp.com/booking", {headers:{Accept:'application/json' }})
console.log(await apiget1.json())


})

test("ApiGetRequest2",async()=>{
    const testrequest = await request.newContext({baseURL:'https://restful-booker.herokuapp.com', 
        extraHTTPHeaders:{
            Accept: 'application/json'

        }})
    const testrequest1 = await testrequest.get("/booking")
    console.log(await testrequest1.json())

})

test("ApiGetRequest3",async()=>{
    const testrequest2 = await ApiGetRequestalltests.get('/booking')
    console.log(await testrequest2.json())

})

test("ApiGetRequestGlobal",async({request})=>{
    const testrequest3 = await request.get('/booking/54',{
        params:{
            firstname: 'Jane',
            lastname: 'Doe'  
        }
    })
    // console.log(await testrequest3.json())
    expect (testrequest3.status()).toBe(200)
    expect (testrequest3.ok()).toBeTruthy
    expect (await testrequest3.json()).toMatchObject( {
        firstname: 'Jane',
        lastname: 'Doe',
        totalprice: 111,
        depositpaid: true,
        bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
        additionalneeds: 'Extra pillows please'

})
})

test("Test API agianst UI", async({request})=>{
    const responseval = await request.get("https://api.demoblaze.com/entries")
    // console.log (await responseval.json())
    // expect (responseval.ok()).toBeTruthy()
    const apivalues = await responseval.json()
    // console.log(apivalues);
    // console.log(apivalues.Items);
    // for(const apivalue of apivalues.Items){

    //     if(apivalue.title == 'Samsung galaxy s6'){
    //         expect(apivalue.price).toBe(360)
    //         console.log("matched and Pasedd")
    //     }

    // }
    
    // apivalues.Items.forEach((apivalue) =>{

    //     if(apivalue.title == 'Nexus 6'){
    //     expect(apivalue.title).toBe('Nexus 6')
    //     expect(apivalue.price).toBe(650)

// }})
    const specificitem = apivalues.Items.find((apivalue)=>{
        return apivalue.title == 'Nexus 6'
        
    })
    expect(specificitem.price).toBe(650)
    console.log(specificitem.desc)
})

test("redoonfindmethod", async({request,page})=>{

    const webpageitems = await request.get("https://api.demoblaze.com/entries")
    const onlineitems = await webpageitems.json()
    // console.log(onlineitems)
    expect(webpageitems.status()).toBe(200)
    expect(webpageitems.ok).toBeTruthy()
    const mobile= onlineitems.Items.find((onlineitem)=> {
        return onlineitem.title == 'Sony vaio i7\n'
    })
    console.log(mobile)
     expect(mobile.price).toBe(790)
     expect(mobile).toMatchObject({
        cat: 'notebook',
      desc: 'REVIEW\n' +
        ' \n' +
        'Sony is so confident that the VAIO S is a superior \n' +
        'ultraportable laptop that the company proudly compares the notebook to \n' +
        "Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is \n" +
        'better, thanks to a lighter weight, higher-resolution display, more \n' +
        'storage space, and a Blu-ray drive. ',
      id: 9,
      img: 'imgs/sony_vaio_5.jpg',
      price: 790,
      title: 'Sony vaio i7\n'
     })

     await page.goto("https://demoblaze.com/")
     await expect(page.getByRole('link', { name: 'Sony vaio i7' })).toContainText("Sony vaio i7")
     console.log(mobile.title)
     await expect(page.getByRole('link', { name: 'Sony vaio i7' })).toContainText(mobile.title)

     

})