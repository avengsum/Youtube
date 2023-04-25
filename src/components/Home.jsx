import { useEffect, useState } from "react"
import Button from "./Button"
import { Api } from "../assets/constants"
import Video from "./Video"
import { Link } from "react-router-dom"

const Home = () => {
    const button = [
        "All","Gaming","Music","Sports","Movies","Software","Cyber",
        "All","Gaming","Music","Sports","Movies",
    ]

    const [videoData , setVideoData] = useState([])
    console.log(videoData)
    

    useEffect(() => {
      getData();
    },[]);


    const getData = async () => {
      const data = await fetch(Api)
      const json = await data.json();

      setVideoData(json.items)
      
    };
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
      <div className="flex flex-wrap -mx-4 mt-4">
      {videoData.map((video, index) => (
      <Link to={'/watch?v=' + video.id}><div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-4">
             <Video info={video} />
        </div>
        </Link>
        
  ))}
</div>
</div>

        
    )
}
export default Home;