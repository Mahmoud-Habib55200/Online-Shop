 import videoTwo from '../assets/Video/TOWN TEAM - Summer Collection 2024.mp4'
const VideopPlayer = () => {
  return (
  
      <div className='w-full'>
          <video
              className='brightness-75'
              autoPlay
              loop
              muted
              width='100%'
              height='100vh'
              src={videoTwo}>
          </video>
      </div>

  )
}

export default VideopPlayer