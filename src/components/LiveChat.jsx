import { useDispatch, useSelector } from "react-redux"
import Chat from "./Chat"
import { useEffect } from "react";
import { addMessage } from "../utilis/chatSlice";
import { generateName, generateString } from "../assets/helper";

const LiveChat = () => {

    const chatMessage = useSelector((store) => store.chat.chatMessage)

    const dispatch = useDispatch();

    useEffect(() => {
        const interval = setInterval(() => {

            dispatch(addMessage({
                name:generateName(),
                message:generateString(8)
            }))

        },2000)

        return () => clearInterval(interval)
    })

    console.log(chatMessage)

    return (
        <div>
        <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-400 flex flex-col-reverse rounded-lg overflow-y-scroll ">
            {chatMessage.map((chat,index) => {
                return(
                <Chat key={index} name={chat.name} message={chat.message} />
            )})}</div>

            <form>
                <input type="text" />
                <button>Send</button>
            </form>
            
        
        </div>
    )
}

export default LiveChat