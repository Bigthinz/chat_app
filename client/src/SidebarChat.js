import React from 'react'
import './SidebarChat.css'
import {Avatar} from  '@material-ui/core';

function SidebarChat() {
    return (
        <div className='sidebarChat'>
            <Avatar src='https://unsplash.com/photos/mEZ3PoFGs_k' />
            <div className='sidebarChat__info'>
                <h2>User name</h2>
                <p>This is the last message</p>
            </div> 
        </div>
    )
}

export default SidebarChat
