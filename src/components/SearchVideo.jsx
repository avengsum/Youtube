const SearchVideo = ({url,title,cTitle,desc}) => {
    return(
        <div>
            <img
            className="object-fill"
             src={url} alt="" />
            <h1>{title}</h1>
            <p>{cTitle}</p>
            <p>{desc}</p>
        </div>
    )
}

export default SearchVideo