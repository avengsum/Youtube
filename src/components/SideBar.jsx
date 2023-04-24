import { useSelector } from "react-redux"
const SideBar = () => {

    const isMenu = useSelector(store => store.app.isSideBar)

    return !isMenu ? null : (
        <div className="flex flex-col h-full fixed text-gray-900">
        <ul className="p-4">
          <li className="py-2 hover:text-gray-200">Home</li>
          <li className="py-2 hover:text-gray-200">Shorts</li>
          <li className="py-2 hover:text-gray-200">Subscriptions</li>
          <li className="py-2 hover:text-gray-200">Library</li>
          <li className="py-2 hover:text-gray-200">History</li>
        </ul>
        <ul className="p-4 ">
          <li className="py-2 hover:text-gray-200">Explore</li>
          <li className="py-2 hover:text-gray-200">Trending</li>
          <li className="py-2 hover:text-gray-200">Shopping</li>
          <li className="py-2 hover:text-gray-200">Music</li>
          <li className="py-2 hover:text-gray-200">Movies & Shows</li>
          <li className="py-2 hover:text-gray-200">Gaming</li>
          <li className="py-2 hover:text-gray-200">News</li>
          <li className="py-2 hover:text-gray-200">Sports</li>
          <li className="py-2 hover:text-gray-200">Learning</li>
          <li className="py-2 hover:text-gray-200">Fashion & Beauty</li>
        </ul>
      </div>
  )
}

export default SideBar