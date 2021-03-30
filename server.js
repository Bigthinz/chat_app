//importing packages
import express from 'express'
import mongoose from 'mongoose'
import Messages from './messageModel.js'
import Pusher from 'pusher'
import cors from 'cors'



//app config
const app = express()
const port = 5000

app.use(express.json())
app.use(cors())

// app.use((req,res, next)=>{
//     res.setHeader("Access-Control-Allow-Origin", '*')
//     res.setHeader('Access-Control-Allow-Headers', '*')
//     next()
// })



const pusher = new Pusher({
  appId: "1180098",
  key: "ea8c5591b337aabc36c2",
  secret: "7d07b40e10bda754d7ee",
  cluster: "mt1",
  useTLS: true
});


//config DB
const connection_url = 'mongodb+srv://admin:bigthinz4o@cluster0.fc5lo.mongodb.net/messenger?retryWrites=true&w=majority'

mongoose.connect(connection_url, {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db = mongoose.connection

db.once('open', ()=>{
    console.log('DB connected')


    const msgCollection = db.collection("messagecontents")
    const changeStream = msgCollection.watch()

    changeStream.on('change', (change)=>{
        console.log(change)

        if(change.operationType === 'insert'){
            const messageDetails = change.fullDocument
            pusher.trigger('messages', 'inserted', {
                user: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                recieved: messageDetails.received
            })
        }else{
            console.log('Error triggering Pusher')
        }

    })

})

app.get('/messages/sync', (req,res)=>{
    Messages.find((err,data)=>{
    if(err){
        res.status(500).send(err)
    }else{
        res.status(200).send(data)
    }}
    )})




app.post('/api/v1/messages/new', (req,res)=>{
    const dbMessage = req.body
    Messages.create(dbMessage, (err, data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(`new message created \n ${data}`)
        }
    })
})



//api routes
app.get('/', (req,res)=>{
    res.status(200).send('hello world')
})

// listening to our server
app.listen(port, ()=>{
    console.log(`App is running on port ${port} `)
})