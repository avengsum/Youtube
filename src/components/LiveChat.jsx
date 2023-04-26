import { useDispatch, useSelector } from "react-redux"
import Chat from "./Chat"
import { useEffect, useState } from "react";
import { addMessage} from "../utilis/chatSlice";
import { generateName, generateString } from "../assets/helper";

const LiveChat = () => {

    const [comment,setComment] = useState("")

    const chatMessage = useSelector((store) => store.chat.chatMessage)

    const dispatch = useDispatch();

    useEffect(() => {
        const inte = setInterval(() => {
            dispatch(addMessage({
                name:generateName(),
                message:generateString(8)
            }))

        },2000);
       

        return () => clearInterval(inte)
    },[])

    return (
        <div>
        <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-400 flex flex-col-reverse rounded-lg overflow-y-scroll ">
            {chatMessage.map((chat,index) => {
                return(
                <Chat key={index} name={chat.name} message={chat.message} />
            )})}</div>

            <form 
            onSubmit={(e) =>{
                e.preventDefault()
                dispatch(addMessage({
                    name:'user',
                    message:comment
                }))
                setComment("")
            }}>
                <input type="text"
                value={comment}
                className="w-[80%] bg-gray-100 border ml-4 mr-2"
                onChange={(e) => setComment(e.target.value)} />
                <button className="font-bold">Send</button>
            </form>
            
        
        </div>
    )
}

export default LiveChat