const Video = ({info}) => {

    const {snippet ,statistics} = info;
   
    const {title,description,thumbnails,channelTitle} = snippet;
    const {likeCount , viewCount ,commentCount} = statistics;

    return (
    <div className="">
    <img
    src={thumbnails.default.url}
    alt=""
    className="w-[80%] object-fill"
  />
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