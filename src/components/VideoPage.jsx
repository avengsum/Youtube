import { useSearchParams } from "react-router-dom"

const VideoPage = () => {

    const [search] = useSearchParams()
    console.log(search)

    return (
        <div className="flex flex-col">
            <div className="px-5">
                <div>
                <iframe width="800" height="500"
                 src={"https://www.youtube.com/embed/" + search.get('v') 
                + "?&autoplay=1"}
                 title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>

                </iframe>
                </div>

            </div>

        </div>
    )
}

export default VideoPage