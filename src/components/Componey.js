import React from 'react'
import Video from '../assets/Video/alphaland-drone-loop-land.mp4'

const Componey = () => {
  return (
    <div className='w-full '>
      <video
        className='brightness-75'
        autoPlay
        loop
        muted
        width='100%'
        height='100vh'
        src={Video}>
      </video>
    </div>
  )
}

export default Componey