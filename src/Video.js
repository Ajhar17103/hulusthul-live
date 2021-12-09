import React,{useRef,useState}from 'react';
import './Video.css'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

const Video=({url,channel,description,song,likes,messages,shares})=>{
    const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    
     if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    } 
  };
    return (
     
 
             <div className='video'>
                {
                         console.log(`https://hulusthul.live/videos/${url}`)
                 }
            
             <video className='video__player'
                loop 
               onClick={onVideoPress}
               ref={videoRef}
               src={`https://hulusthul.live/videos/${url}`}></video>
                    

              <VideoFooter />
              <VideoSidebar />
             </div>
          
      
    )
}

export default Video
