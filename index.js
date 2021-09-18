const express = require ("express")
const cors = require ("cors")
const user = require("./users_root")



const app =  express ()


//middle ware

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
 
//routig 
app.use ("/api", user)



// routing koneksi ke server 

app.listen(8080, function(){
    console.log ("terlah terhubung ke port : 8080 ")
})