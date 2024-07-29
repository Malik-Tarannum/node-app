const express=require('express')
const router=express.Router()
const MenuItem =require('../models/MenuItem')

router.post('/menu', async (req, resp)=>{
    try{

        const data= req.body
        const menuItem= new MenuItem(data)
        const response =await menuItem.save()
        console.log(response)
        resp.status(200).json(response)

    }
    catch(error){
        console.log(error)

        resp.status(500).json({error:"internal server error"})


    }
})

router.get('/get-menu', async (req,resp)=>{
    try{

        const menuItems=await MenuItem.find()
        resp.status(200).json(menuItems)

    }
    catch(error){
        resp.status(500).json({error:"internal server error"})

    }
})

module.exports=router
