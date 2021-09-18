const { query } = require('express')
const express = require('express')
const ps = require('./Connection')
const user = express.Router() 

// ini uuntuk membuat user baru 
user.post("/user_create", function(req,res){
    //tangkap body 
    const data = req.body 
    //store data body ke database 
    ps.user.create({
        data : data 
    })
    .then(result => {

        res.json({
            succees : 200,
            query : result
        })

    })
    .catch (err => {
        res.json({
            success : false,
            error  : err.message 
        })
    })

})

// ini untuk membuat read All users 
user.get ("/user_read", function(req,res){
    // paggil data dari databases 
    ps.user.findMany()
    .then(result => {
        res.json({
            succes : true, 
             query : result
        })
    })
    .catch (err => {
            res.json({
                susscess : 200 ,
                error : err.message
            })
    })
})

// ini ada baris code untuk mendelete 

module.exports = user 