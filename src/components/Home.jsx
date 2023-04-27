import { useEffect, useState } from "react"
import Button from "./Button"
import { Api } from "../assets/constants"
import Video from "./Video"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addVideo } from "../utilis/videoSlice"

const Home = () => {
    const button = [
        "All","Gaming","Music","Sports","Movies","Software","Cyber",
        "All","Gaming","Music","Sports","Movies",
    ]

    const dispatch = useDispatch()

    const [videoData , setVideoData] = useState([])

    const getData = async () => {
      const data = await fetch(Api)
      const json = await data.json();

      setVideoData(json.items)
      dispatch(addVideo(json.items))
      
    };
    

    useEffect(() => {
      getData();
    },[]);


   
    return (
        <div className="mt-6">
        <div className="flex space-x-6 items-center">
          {button.map((btn, index) => {
            return (
              <Button
                key={index}
                name={btn}
                className=""
              />
            );
          })}
        </div>
      <div className="flex flex-wrap mt-4 space-y-4">
      {videoData.map((video, index) => (
      <Link to={'/watch?v=' + video.id}><div key={index} className=" w-[400px]">
             <Video info={video} />
        </div>
        </Link>
        
  ))}
</div>
</div>

        
    )
}
export default Home;