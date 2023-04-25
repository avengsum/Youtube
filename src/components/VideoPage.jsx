import { useSearchParams } from "react-router-dom"
import Comments from "./Comments"
import { useEffect, useState } from "react"

const VideoPage = () => {
    const [search] = useSearchParams()
    const [comment,setComment] = useState([])

    useEffect(() => {
        getComments()
    },[])
    
    const getComments = async () => {
        const data = await fetch(`https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyB0AHrkRB54Lv3ISPzwOYCXxVWYkjs48-8&textFormat=plainText&part=snippet&videoId=${search.get('v')}&maxResults=100`);
        const json = await data.json();
        setComment(json.items)
    }


    

    return (
        <div className="flex flex-col">
            <div className="px-5">
                <div>
                <iframe width="800" height="500"
                 src={"https://www.youtube.com/embed/" + search.get('v')}
                 title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>

                </iframe>
                </div>

            </div>
            <div className="mt-5 ">
                <h1 className="text-2xl font-bold">Comments</h1>
                {comment?.map((comment) => {
                    return(
                        <Comments key={comment.id} data={comment} />
                    )
                })}
                
            </div>

        </div>
    )
}

export default VideoPage