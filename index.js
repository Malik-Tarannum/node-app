
app.get('/',(req,resp)=>{
    resp.send("Hello World")

})

app.get('/idli',(req,resp)=>{

    let customized_idli={
        name: 'rava idli',
        count: 10,
        is_samber: true,
        isCoconusChutney:false
    } 
    resp.send(customized_idli)
    
    
})




