import { useSearchParams } from "react-router-dom"
import Comments from "./Comments"
import { useEffect, useState } from "react"
import LiveChat from "./LiveChat"
import { useSelector } from "react-redux"
import Video from "./Video"

const VideoPage = () => {
    const [search] = useSearchParams()
    const [comment,setComment] = useState([])

    const videoData = useSelector((store) => store.video.videoData[0])
    console.log(videoData)

    useEffect(() => {
        getComments()
    },[])

    
    const getComments = async () => {
        const data = await fetch(`https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyB0AHrkRB54Lv3ISPzwOYCXxVWYkjs48-8&textFormat=plainText&part=snippet&videoId=${search.get('v')}&maxResults=100`);
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
            <div className="w-[20%]">
                {videoData.map((video, index) => (
               <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-4">
                <Video info={video} />
                 </div> ))}
            </div>
            </div>
            
            
        
            </div>

        </div>
    )
}

export default VideoPage