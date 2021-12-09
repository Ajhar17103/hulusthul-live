import './App.css';
import Video from './Video';
import React, { Component } from 'react';
import axios from 'axios'
/*
function App() {
  return (
    <>
    <div className="app">
      <div className='app__videos'>

     
     <Video  />
     <Video   />
     <Video/>
     <Video/>
     <Video/>
     </div>
    </div>
    </>
  );
}

export default App;

*/

export default class App extends Component {
  
  state={
    videos:[]
  }
  state={
    url:'',
    videos:[],
    
  }
 componentDidMount() {
       

   axios.get('http://hulusthul.live/api/videos')
   .then(res=>{
     console.log(res.data)
         this.setState({
       videos:res.data
     })
   })
   .catch(res=>{
     console.log(`this is error from laravel ${res}`)
   })
  }

  render() {
    return (
      <>
        <div className="app">
      <div className='app__videos'>
         
       
       {
         this.state.videos.map(({video,store_name,description,song, likes, messages, shares})=>(
           
     <Video 
     url={video}
     channel={store_name}
     song="this is song name"
     likes={200}
     messages="50"
     description={description}
     shares="15" />
         ))
       }


     
     
     </div>
    </div>
      </>
    )
  }
}
