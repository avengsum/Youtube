import { useEffect, useState } from "react"
import SearchVideo from "./SearchVideo";

const SearchVideoPage = () => {
    const [result , setResult] = useState();

    const getResult = async () => {
        const data = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=wwe&type=video&key=${import.meta.env.VITE_API_KEY}`)
        const json = await data.json();
        console.log(json)
        setResult(json.items)
    }

    useEffect(() => {
        getResult()
    },[])

    
    return(
        <div className="">
            {result?.map((x) => (
                <SearchVideo url={x?.snippet?.thumbnails?.high?.url}
                title={x?.snippet?.title}
                cTitle ={x?.snippet?.channelTitle}
                desc= {x?.snippet?.description}
                 />
            ))}
        </div>
    )
}

export default SearchVideoPage