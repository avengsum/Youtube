const Comments = ({data}) => {

    const {snippet} = data
    const {topLevelComment} = snippet

    return (
        <div className=" flex">
            <div> <img className="w-[40px] rounded-2xl" src={topLevelComment?.snippet?.authorProfileImageUrl} alt="" /></div>
           
            <div>
                <h1 className="font-medium mb-2">{topLevelComment?.snippet?.authorDisplayName}</h1>
                <p>{topLevelComment?.snippet?.textDisplay}</p>
                <div className="flex space-x-4">
                    <p className="">👍 {topLevelComment?.snippet?.likeCount}</p>
                    <p className="text-blue-600">{snippet?.totalReplyCount} replies</p>
                </div>
            </div>
        </div>
    )
}

export default Comments;