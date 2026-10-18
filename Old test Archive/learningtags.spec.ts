import {test} from "@playwright/test"


test.describe ("tagsinDescrib",{
    tags:["@SMOKEPROD"],
    annotation:
        [{type:"LeaningAnnotion",description: "Jira Refrence Link"},
         {type:"LearningAnnotion1",description:"JIRA 2nd Link"}]}
         ,async()=>{

    test ("Learningtags1 @SANITY", async({page})=>{

    console.log("Learning Tags1")

})

test ("Learningtags2",{annotation: {
    type: "Annotation inside a Describe section",
    description: "Jira second reference"
}}, async({page})=>{

    console.log("Learning Tags2")

})

test("Learningtags3", async({page})=>{

    console.log("Learning Tags3")

})

})



test("Learningtags4 @UI", async({page})=>{

    console.log("Learning Tags4")

})

test("Learningtags5 @SMOKE", async({page})=>{

    console.log("Learning Tags5")

})

test("Learningtags6 @SMOKE", async({page})=>{

    console.log("Learning Tags6")

})

test("Learningtags7 @UI", async({page})=>{

    console.log("Learning Tags7")

})