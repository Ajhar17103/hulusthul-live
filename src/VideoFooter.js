import React from 'react'
import './VideoFooter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
// import MusicNoteIcon from "@material-ui/icons/MusicNote";
  import Ticker from "react-ticker";
const VideoFooter=()=>{
    return (
        <>
           <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@channel</h3>
        <p>description</p>
        <div className="videoFooter__ticker">
          <FontAwesomeIcon icon={faMusic} className="videoFooter__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p> song{index}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="videoFooter__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
        </>
    )
}

export default VideoFooter
