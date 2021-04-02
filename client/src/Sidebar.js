import React from 'react'
import './Sidebar.css'

import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { IconButton, Avatar } from '@material-ui/core';
import{ SearchOutlined } from '@material-ui/icons';

import SidebarChat from './SidebarChat'


function Sidebar({messages}) {
   
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar src='https://unsplash.com/photos/mEZ3PoFGs_k'/>
                <div className='sidebar__headerRight'>
                     <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                 </div>
            </div>

            <div className='sidebar__search'>
                <div className='sidebar__searchContainer'>
                    <SearchOutlined />
                    <input placeholder='Search or start new chat' type='text' />
                    
                </div>
            </div>

            <div className='sidebar__chats'>
                 <SidebarChat messages={messages}/>
                 <SidebarChat/>
                 <SidebarChat/>
                
            </div>

        </div>
    )
}

export default Sidebar
