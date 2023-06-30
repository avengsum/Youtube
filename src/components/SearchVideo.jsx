const SearchVideo = ({url,title,cTitle,desc}) => {
    return(
        <div className="flex mt-5 gap-5">
            <img
            className="w-32 h-20 md:w-96 md:h-full"
             src={url} alt="" />
            <div>
            <h1 className="font-medium text-xs  sm:text-lg">{title}</h1>
            <p className="text-slate-600 font-bold">{cTitle}</p>
            <p className="text-slate-600">{desc}</p>
            </div>
            
        </div>
    )
}

export default SearchVideo