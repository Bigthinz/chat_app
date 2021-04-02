// import React from 'react'
// import { useAuth0 } from '@auth0/auth0-react'; 
// import JSONPretty from 'react-json-pretty'

import  React, {useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
// import { Container } from "react-bootstrap";
import '../App.css';
import Sidebar from '../Sidebar';
import Chat from '../Chat'
import Pusher from 'pusher-js'
import axios from '../axios'
// import ChatApp from './components/chatApp'
import { useAuth0 } from '@auth0/auth0-react'; 


import  NavBar  from "../components/nav-bar";
// import  Home  from "./views/home";
// import ProtectedRoute from './auth/protectedRoute';
import Profile from '../views/profile';



// import Sidebar from '../Sidebar'
// import Chat from '../Chat'


const ChatApp = ()=>{

    const [messages, setMessages] = useState([])

    useEffect(()=>{
      //making API call
      axios.get('/messages/sync')
           .then(response => {
            // console.log(response.data)
             setMessages(response.data)
           })
    },[])
  
    console.log(messages)
  
    useEffect(()=>{
  
      const pusher = new Pusher('ea8c5591b337aabc36c2', {
        cluster: 'mt1'
      });
  
      const channel = pusher.subscribe('messages');
      channel.bind('inserted', (newMessage)=> {
        setMessages([...messages, newMessage])
      });
  
  
      return ()=>{
        channel.unbind_all()
        channel.unsubscribe()
      }
  
    },[messages])


    return (
        <>
                 {/* sidebar*/}
               <Sidebar messages={messages}/>

                {/* chat component*/} 
                <Chat messages={messages}/>

        </>
    )
}

export default ChatApp
