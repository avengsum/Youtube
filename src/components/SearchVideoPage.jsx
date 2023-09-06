import { useEffect, useState } from "react"
import SearchVideo from "./SearchVideo";
import { Link, useParams, useSearchParams } from "react-router-dom";

const SearchVideoPage = () => {
    const [result , setResult] = useState();
    const [search] = useSearchParams()


    const getResult = async () => {
        const data = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${search.get('v')}&type=video&key=${import.meta.env.VITE_API_KEY}`)
        const json = await data.json();
        setResult(json.items)
    }


    useEffect(() => {
        getResult()
    },[])
    
    return(
        <div className="flex-col sm:ml-10">
            {result?.map((x) => (
                <Link to={'/watch?v=' + x.id.videoId}>
                <SearchVideo url={x?.snippet?.thumbnails?.high?.url}
                title={x?.snippet?.title}
                cTitle ={x?.snippet?.channelTitle}
                desc= {x?.snippet?.description}
                 />
                </Link>
            ))}
        </div>
    )
}

export default SearchVideoPage