import React, { useState } from 'react'
import './VideoSidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCommentAlt, faShareAlt, } from '@fortawesome/free-solid-svg-icons'
const VideoSidebar =()=>{
    const [liked,setLiked]=useState(false)
    return (
        <>
             <div className='videoSidebar'>
             <div className="videoSidebar__button">
 {
     liked ? <FontAwesomeIcon icon={faHeart} onClick={e=>setLiked(false)} />:<FontAwesomeIcon icon={faHeart} style={{color:'red', fontSize:'25px' }}  onClick={e=>setLiked(true)}/>
 }
                
           <p>{liked? 300:300+1}</p>      
             </div>
             <div className="videoSidebar__button">
 
                 <FontAwesomeIcon icon={faCommentAlt}  style={{fontSize:'20px'}}/>
                 <p>50</p>
             </div>
             <div className="videoSidebar__button">
 
           <FontAwesomeIcon icon={faShareAlt}/>
           <p>5</p>
             </div>
             </div>
        </>
    )
}
export default VideoSidebar;