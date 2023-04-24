const Video = ({info}) => {

    const {snippet ,statistics} = info;
   
    const {title,description,thumbnails,channelTitle} = snippet;
    const {likeCount , viewCount ,commentCount} = statistics;

    return (
    <div className="bg-white p-4 rounded-md shadow-md ">
    <img
    src={thumbnails.default.url}
    alt=""
    className="w-56 md:w-44 h-30 object-cover rounded-md mr-0 md:mr-4 mb-4 md:mb-0"
  />
  <div className="flex flex-col flex-1">
    <h3 className="font-semibold text-gray-900 ">{title}</h3>
    <p className="text-gray-600 text-sm ">{channelTitle}</p>
    <div className="flex items-center mt-2">
      <span className="text-gray-500 text-sm mr-1">{viewCount}</span>
      
    </div>
  </div>
</div>


    )
}

export default Video;