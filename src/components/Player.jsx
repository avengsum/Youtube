import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import ReactPlayer from 'react-player'
import { useState } from 'react';

const Player = ({value}) => {
    const [play , setPlay] = useState(false)

    return (
        <div className="sm:w-36 md:w-56 lg:w-80 xl:w-80 relative flex justify-center items-center'">
        <ReactPlayer
        className="relative"
        playing={play}
        url={value.data.video}
        width='100%'
        height='100%'

        />
          <button
          onClick={() => setPlay(!play)}
          className='absolute opacity-0 hover:opacity-100 mt-[25%]'>
            {play ? <PlayArrowIcon  style={{ fontSize: 40 }} />
            : <PauseIcon style={{fontSize: 40}} />
             }
          
          </button>

        
        </div>
    )
}

export default Player