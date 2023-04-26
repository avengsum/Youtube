const Comments = ({data}) => {

    const {snippet} = data
    const {topLevelComment} = snippet

    return (
        <div className=" flex space-x-3">
            <div> <img className="w-[40px] rounded-full" src={topLevelComment?.snippet?.authorProfileImageUrl} alt="" /></div>
           
            <div>
                <h1 className="font-medium mb-1">{topLevelComment?.snippet?.authorDisplayName}</h1>
                <p className="max-w-[550px]">{topLevelComment?.snippet?.textDisplay}</p>
                <div className="flex space-x-4">
                    <p className="">👍 {topLevelComment?.snippet?.likeCount}</p>
                    <p className="text-blue-600">{snippet?.totalReplyCount} replies</p>
                </div>
            </div>
        </div>
    )
}

export default Comments;