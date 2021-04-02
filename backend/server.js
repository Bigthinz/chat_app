//importing packages

const mongoose = require('mongoose')
const Pusher = require('pusher')
const Messages = require('./model/messageModel')
const userRoute = require('./route/userRoute')


const app = require('./app')







//app config
const port = 5000



 app.use((req,res, next)=>{
        res.setHeader("Access-Control-Allow-Origin", '*')
        res.setHeader('Access-Control-Allow-Headers', '*')
        next()
    })
    


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
                received: messageDetails.received
            
            })
        }else{
            console.log('Error triggering Pusher')
        }

    })

})

app.use('/api/v1/messages', userRoute)
// listening to our server
app.listen(port, ()=>{
    console.log(`App is running on port ${port} `)
})

