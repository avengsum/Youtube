const Button = ({name}) => {
    return(
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out">
            {name}
        </button>
    )
}

export default Button