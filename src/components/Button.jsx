const Button = ({name}) => {
    return(
        <button className="text-sm bg-pillsBg hover:bg-gray-700 py-1 px-3 rounded-full text-white border border-gray-700 bg-[rgba(32,32,32)] transition duration-150">
            {name}
        </button>
    )
}

export default Button