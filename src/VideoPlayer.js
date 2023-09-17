
import React, { useState } from 'react';

import ModalVideo from 'react-modal-video';
const VideoPlayer = () =>{
  const [isOpen, setOpen] = useState(false);
  function setUp(){
    setOpen(true)
  }

  function setOff(){
    setOpen(false)
  }

  return (
    <React.Fragment>
      <ModalVideo
				channel="youtube"
				youtube={{ mute: 0, autoplay: 0 }}
				isOpen={isOpen}
				videoId="L61p2uyiMSo"
				onClose={() => setOpen(false)} 
			/>
      <button className="btn-primary" onClick={() => setUp()}>
        VIEW DEMO
      </button>
      <button className="btn-primary" onClick={() => setOff()}>
      Close
      </button>
    </React.Fragment>
  );
};
export default VideoPlayer;
