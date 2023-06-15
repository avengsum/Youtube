import { useEffect, useState } from "react"
import Button from "./Button"
import { Api } from "../assets/constants"
import Video from "./Video"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addVideo } from "../utilis/videoSlice"
import useOnline from "../utilis/useOnline"

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

    const isOnline = useOnline();

    if(!isOnline){
      return <h1 className="text-3xl">check your internet</h1>
    }

   
    return  (
        <div className="mt-6">
        <div className="top-[3.5rem] z-20 flex items-center flex-1 overflow-x-hidden overflow-y-hidden overflow-scroll
        border-t-[1px] border-b-[1px] border-[rgba(56,56,56)] px-[1.25rem] py-[0.625rem]
        gap-4
         ">
          {button.map((btn, index) => {
            return (
              <Button
                key={index}
                name={btn}
              />
            );
          })}
        </div>
      <div className="flex flex-wrap mt-4 space-y-4">
      {videoData?.map((video, index) => (
      <Link key={index} to={'/watch?v=' + video.id}><div key={index} className=" w-[400px]">
             <Video info={video} />
        </div>
        </Link>
        
  ))}
</div>
</div>

        
    )
}
export default Home;