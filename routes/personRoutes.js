const express=require('express')
const router=express.Router()
const Person =require('../models/Person')
const { error } = require('console')

router.post('/', async (req,resp)=>{

    try{
        const data= req.body //assuming the req.body contains the person data
        //create new person documnet using the mongoose model
        
        const newPerson =new Person(data)
        const response=await newPerson.save();
        console.log(response)
        resp.status(200).json(response)

    }
    catch(error){
        console.log(error)
        resp.status(500).json({error:"Internal server arror"})


   // we can avoid this and pass data directly
    // newPerson.name= data.name
    // newPerson.age=data.age
    // newPerson.designation=data.designation
    // newPerson.mobile= data.mobile
    // newPerson.email= data.email
    // newPerson.address= data.address
    // newPerson.salary= data.salary

    }
    
})

router.get('/', async (req,resp)=>{
    try{

       const data= await Person.find()
       console.log(data,"fetched")
       resp.status(200).json(data)

    }
    catch(error){
        console.log(error,"error")
        resp.status(500).json({error:'Internal server error'})
    }
})

router.get('/:desig',async (req, resp)=>{
    try{

       const desigType= req.params.desig
       if(desigType ==='chef' || desigType ==='manager' || desigType=== 'waiter'){
       const response= await Person.find({designation: desigType})
       console.log(response)
       resp.status(200).json(response)

       }
       else
       {
        console.log("else")

        resp.status(404).json({error: "Invalid desig type"})
       }
    }
    catch(error){
        console.log(error)

        resp.status(500).json({error:"internal server error"})

    }
})

router.put('/:id',async (req,resp)=>{
    try{

        const personId=req.params.id
        const updatedPersonData=req.body
        const response=await Person.findByIdAndUpdate(personId,updatedPersonData ,{
            new: true, //return the updated content 
            runValidators:true //run mongosoe validation
        })
        if(!response){
            return resp.status(404).json({error: "Person not found"})

        }
        console.log(response)
        resp.status(200).json(response)


    }
    catch(error){
        console.log(error)
        resp.status(500).json({error:"Internal server error"})

    }

})

router.delete('/:id', async (req,resp)=>{
    try{
        const personId=req.params.id
        const response= await Person.findByIdAndDelete(personId)
        if(!response){
            return resp.status(404).json({error: "Person not found"})

        }
        console.log(response)
        resp.status(200).json({message:"person deleted successfully"})
       


    }
    catch(error){
        console.log(error)
        resp.status(500).json({error:"Internal server error"})
    }
})
module.exports= router