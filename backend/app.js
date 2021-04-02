const express = require('express')
// const cors = require('cors')
const userRoute = require('./route/userRoute')


const app = express()

app.use((req,res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    next()
})



app.use(express.json())
// app.use(cors())


app.use('/messages', userRoute)




module.exports = app