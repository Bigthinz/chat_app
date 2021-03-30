import React from 'react'
import './Chat.css'

import { IconButton, Avatar } from '@material-ui/core';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import AttachFile from '@material-ui/icons/AttachFile';
import MoreVert from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';


function Chat() {
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
                <p className='chat__message'>
                    <span className='chat__name'>King</span>
                    This is a message
                    <span className='chat__timestamp'>
                        {new Date().toUTCString()}

                    </span>
                    
                </p>
                <p className=' chat__message chat__reciever'>
                    <span className='chat__name'>King</span>
                    This is a message
                    <span className='chat__timestamp'>
                        {new Date().toUTCString()}

                    </span>
                    
                </p>
                <p className='chat__message'>
                    <span className='chat__name'>King</span>
                    This is a message
                    <span className='chat__timestamp'>
                        {new Date().toUTCString()}

                    </span>
                    
                </p>

            </div>

            <div className='chat__footer'>
                <InsertEmoticonIcon />
                <form>
                    <input placeholder='Type a message' type='text' />
                    <botton type='submit'></botton>    
                </form>
                <MicIcon />
            </div>

        </div>
    )
}

export default Chat
