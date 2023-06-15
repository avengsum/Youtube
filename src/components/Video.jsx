const Video = ({info}) => {

    const {snippet ,statistics} = info;
   
    const {title,description,thumbnails,channelTitle} = snippet;
    const {likeCount , viewCount ,commentCount} = statistics;

    return (
    <div className="">
    <div className="relative  sm:h-36 w-full">
    <img
    src={thumbnails.high.url}
    alt=""
    className="relative h-full w-full object-cover"
  />
  </div>
  <div className="mt-2">
    <h3 className=" font-bold">{title}</h3>
    <p className=" ">{channelTitle}</p>
    <div className="">
      <span className="">{viewCount > 1000000 ?(viewCount/1000000).toFixed(1) : (viewCount/1000).toFixed() }
       {viewCount > 1000000 ? "m" : "k" }</span>
      
    </div>
  </div>
</div>


    )
}

export default Video;