import { useSearchParams } from "react-router-dom"
import Comments from "./Comments"
import { useEffect, useState } from "react"
import LiveChat from "./LiveChat"
import { useSelector } from "react-redux"
import Video from "./Video"
import { Link } from "react-router-dom"
import { useRef } from "react"

const VideoPage = () => {
    const [search] = useSearchParams()
    const [comment,setComment] = useState([])
    const [local,setLocal] = useState([]);
        const topRef = useRef(null);
        console.log(search)
      
        const handleLinkClick = (e) => {
            e.preventDefault();
            topRef.current.scrollIntoView({ behavior: "smooth" });
          };

    const videoData = useSelector((store) => store.video.videoData[0])
    
    useEffect(() => {
        getComments()
        setLocal(videoData)
        window.scrollTo(0, 0);
    },[search])

    
    const getComments = async () => {
        const data = await fetch(`https://www.googleapis.com/youtube/v3/commentThreads?key=${import.meta.env.VITE_API_KEY}&textFormat=plainText&part=snippet&videoId=${search.get('v')}&maxResults=100`);
        const json = await data.json();
        setComment(json.items)
    }

    return (
        <div className="w-full">
            <div className="px-5 w-full">
                <div className="flex">
                <iframe width="800" height="500"
                 src={"https://www.youtube.com/embed/" + search.get('v')}
                 title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>

                </iframe>
                

                <div className="w-[30%]">
                    <LiveChat />
                </div></div>
            <div className="flex justify-around">
               <div className="mt-5 ">
                <h1 className="text-2xl font-bold">Comments</h1>
                {comment?.map((comment) => {
                    return(
                        <Comments key={comment.id} data={comment} />
                    )
                })}
                
            </div>
            <div className="w-[20%] mt-4">
                {local?.map((video, index) => (
              <Link key={index} to={'/watch?v=' + video.id}> <div key={index} className="mb-8" >
                <Video info={video} />
                 </div> </Link> ))}
            </div>
            </div>
            
            
        
            </div>

        </div>
    )
}

export default VideoPage