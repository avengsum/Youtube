import SideBar from "./SideBar"
import { Outlet } from "react-router-dom"
import Nav from "./Nav"

const Body = () => {
    return (
        <div className="flex">
            
            <div className="w-1/6 text-gray-200">
               <SideBar />
            </div>
            <div className="w-4/5" >
                <Outlet />
            </div>
        </div>
    )
}

export default Body