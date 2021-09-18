const express  = require("express")
const app  = express ()
const path = require('path')
const cors = require ("cors")


//midddle ware
app.use(express.json())
app.use(express.urlencoded({extended:false }))
app.use(cors())




// routing 
app.get('/query', function(req ,res){
    
  // tanggkap payload dari client 
  const reqUsername = req.query.username
  const reqmail = req.query.email

  // lof apa yang di tangkap
  console.log("hasil dari client : " , reqUsername)


  res.send(`
  ==============================================<br>
  <h1>${reqUsername}</h1><br>
  email anda adalah :<h1> ${reqmail}</h1><br> 
  ==============================================<br>
  <h1>thank You !</h1>
  
  `)
})


app.get("/param/:username/:email" , function (req,res){
    
    //litersi dari fungsi prameter di atas dengan code di bawah ini 
    const reqUsername = req.params.username
    const reqmail = req.params.email
    // kembalikan kepada client 
    res.send(`
     rikuest params anda : ${reqUsername} 
     email anda adalah   : ${reqmail}
     
    `)

})
 app.post("/api/user_create", function(req,res){
    // tanggkap req body dari client 
    const data = req.body
    

    // kembalikan dalam bentuk json 
    res.json ({
        success : true,
        status : 200,
        query : data 
    })

 })




// listen 
app.listen(8080, function(){
    console.log("server connected success")
} )


