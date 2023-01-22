import React from 'react'
import videoBg from './assets/video-3.mp4'

const Main=()=> {
  return (
    <div className='main'>
        <video src={videoBg} autoPlay loop muted/>
        <div className='content'>
            <h1>Welcome</h1>
            <p>To FXINC</p>
        </div>
    </div>
  )
}

export default Main