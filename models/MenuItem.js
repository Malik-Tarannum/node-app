const mongoose=require('mongoose')
const { type } = require('os')
const menuItemSchema=new mongoose.Schema({

    name:{
        type: String,
        required: true
    },

    price:{
        type: Number,
        required: true
    },
    is_drink:{
        type: Boolean,
        default: false
    },
    taste:{
        type: String,
        enum:["sweet","sour","spicy"],
        required: true
    },
    ingredients: {
        type: String,
        default:[]
    },
    num_sales:{
        type: Number,
        default: 0
    }


})

const MenuItem=mongoose.model('MenuItem' ,menuItemSchema)
module.exports= MenuItem