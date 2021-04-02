const Messages = require('../model/messageModel')


exports.sync = async (req,res)=>{
    await Messages.find((err,data)=>{
    if(err){
        res.status(500).send(err)
    }else{
        res.status(200).send(data)
    }}
)}




exports.newMsg = async(req,res)=>{
    const dbMessage = req.body
    await Messages.create(dbMessage, (err, data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(`new message created \n ${data}`)
        }
    })
}