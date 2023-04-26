const Chat = ({name,message}) => {
    return (
        <div className="flex items-center shadow-sm">
            <img
            className="h-8 rounded-full"
            alt="user"
            src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
            />
            <span className="font-bold px-2">{name}</span>
            <span>{message}</span>

        </div>
    )
}

export default Chat