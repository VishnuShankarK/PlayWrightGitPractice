import { describe } from "node:test"
import {test} from "../CustomFixtures/OrangeFixtures"
import data1 from "../Testdata/testdata1.json"
import dataarray from "../Testdata/testdata2.json"

describe("LearnTags @Smoke", async({page})=>{

   test("Login", async({page,Login,Home,Recruitmnet})=>{

   await Login.loadpage('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   await Login.logon(data1.username,data1.password)
   test.slow()
   await Home.search('FMLName')

})

dataarray.forEach((data)=>{

test("Enter" + data.Firstname , async({page,Login,Home,Recruitmnet})=>{

   await Login.loadpage('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   await Login.logon(data1.username,data1.password)
   test.slow()
   await Home.search('FMLName')
   await Recruitmnet.Addcandidates(data.Firstname,data.Middlename,data.Lastname,data.email)

})})

})

for (const data of dataarray){

test("Enter from CSV " + data.Firstname , {tag:"@UI"} , async({page,Login,Home,Recruitmnet})=>{

   await Login.loadpage('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   await Login.logon(data1.username,data1.password)
   test.slow()
   await Home.search('FMLName')
   await Recruitmnet.Addcandidates(data.Firstname,data.Middlename,data.Lastname,data.email)

})}
