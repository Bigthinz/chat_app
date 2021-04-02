import React from 'react'
import './SidebarChat.css'
import {Avatar} from  '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react'; 


function SidebarChat({messages}) {

    const { user, isAuthenticated } = useAuth0();


    return (
        <div className='sidebarChat'>
            <Avatar src='https://unsplash.com/photos/mEZ3PoFGs_k' />
            <div className='sidebarChat__info'>
                <h2>{user.name}</h2>
                <p>This is the last message</p>
            </div> 
        </div>
    )
}

export default SidebarChat
