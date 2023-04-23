import { useSelector } from "react-redux"
const SideBar = () => {

    const isMenu = useSelector(store => store.app.isSideBar)

    return !isMenu ? null : (
        <div class="flex flex-col h-full text-gray-900">
        <ul class="p-4">
          <li class="py-2 hover:text-gray-200">Home</li>
          <li class="py-2 hover:text-gray-200">Shorts</li>
          <li class="py-2 hover:text-gray-200">Subscriptions</li>
          <li class="py-2 hover:text-gray-200">Library</li>
          <li class="py-2 hover:text-gray-200">History</li>
        </ul>
        <ul class="p-4 mt-auto">
          <li class="py-2 hover:text-gray-200">Explore</li>
          <li class="py-2 hover:text-gray-200">Trending</li>
          <li class="py-2 hover:text-gray-200">Shopping</li>
          <li class="py-2 hover:text-gray-200">Music</li>
          <li class="py-2 hover:text-gray-200">Movies & Shows</li>
          <li class="py-2 hover:text-gray-200">Gaming</li>
          <li class="py-2 hover:text-gray-200">News</li>
          <li class="py-2 hover:text-gray-200">Sports</li>
          <li class="py-2 hover:text-gray-200">Learning</li>
          <li class="py-2 hover:text-gray-200">Fashion & Beauty</li>
        </ul>
      </div>
  )
}

export default SideBar