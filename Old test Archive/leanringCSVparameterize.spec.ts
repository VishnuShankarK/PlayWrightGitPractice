import {test} from "../CustomFixtures/OrangeFixtures"
import data1 from "../Testdata/testdata1.json"
import fs from "fs"
import { parse } from "csv-parse/sync"

const dataarray: any[] = parse (fs.readFileSync('Testdata/testdata3.csv'),{

    columns:true,
    skip_empty_lines:true,
    // delimiter:";"

})


test("Login", async({page,Login,Home,Recruitmnet})=>{
   await Home.search('FMLName')
   console.log(dataarray)

})


dataarray.forEach((record)=>{

test("Enter" + record.Firstname , async({page,Login,Home,Recruitmnet})=>{

   await Home.search('FMLName')
   await Recruitmnet.Addcandidates(record.Firstname,record.Middlename,record.Lastname,record.email)

})})