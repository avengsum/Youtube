import SideBar from "./SideBar"
import Home from './Home'

const Body = () => {
    return (
        <div className="flex">
            <div className="w-1/6 text-gray-200">
               <SideBar />
            </div>
            <div className="w-4/5" >
                <Home />
            </div>
        </div>
    )
}

export default Body