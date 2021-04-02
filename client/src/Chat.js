import React, { useState } from 'react'
import './Chat.css'

import { IconButton, Avatar } from '@material-ui/core';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import AttachFile from '@material-ui/icons/AttachFile';
import MoreVert from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from './axios'


function Chat({messages}) {

    const sendMessage = async (e)=>{
        e.preventDefault()

        await axios.post('/api/v1/messages/new',{
            message: input,
            name: "sing",
            timestamp: "null",
            received: true
        })

        setInput('')
    }

    const [input, setInput] = useState('')

    return (
        <div className='chat'>
           <div className='chat__header'>
                <Avatar />
                <div className='chat__headerInfo'>
                    <h3>Room name</h3>
                    <p>Last seen agt....</p>
                </div>
                
                <div className='chat__headerRight'>
                <   IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
           </div>

            <div className='chat__body'>

                {messages.map((message) =>(
                    <p className={`chat__message ${message.received && "chat__reciever"}`}>
                        <span className='chat__name'>{message.name}</span>
                        {message.message}
                        <span className='chat__timestamp'>
                            {message.timestamp}

                        </span>
                        
                    </p>
                ))}


            </div>

            <div className='chat__footer'>
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder='Type a message' type='text' />
                    <button onClick={sendMessage} type='submit'></button>    
                </form>
                <MicIcon />
            </div>

        </div>

    )
}

export default Chat
