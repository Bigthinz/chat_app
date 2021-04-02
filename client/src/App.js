import  React, {useState, useEffect } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat'
import Pusher from 'pusher-js'
import axios from './axios'


function App(){

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


  return(
    <div className="app">
      <div className='app__body'>

      {/* sidebar*/}
      <Sidebar />

       {/* chat component*/} 
       <Chat messages={messages}/>


      </div>
    </div>
  );
};

export default App;


