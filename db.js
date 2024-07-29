const mongoose=require('mongoose')
//Defione the mongo db connection url 
const mongoURL= 'mongodb://localhost:27017/mydb'

//Setup mongoDB connection
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology : true
})

//get the default connection
//mogoose maintains a default connection object representing the mongoDB connection
const db= mongoose.connection

db.on('connected',()=>{
    console.log('Connected to MongoDB server')
})

db.on('error',(error)=>{
    console.error('MongoDB connection error:' ,error)
})

db.on('disconnected',()=>{
    console.log('MongoDb disconnected')
})

module.exports=db
