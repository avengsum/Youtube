import { useSelector } from "react-redux"
const SideBar = () => {

    const isMenu = useSelector(store => store.app.isSideBar)

    console.log(isMenu)

    return (
    <div>
        <ul>
            <li>Home</li>
            <li>Shorts</li>
            <li>Subscriptions</li>
            <li>Library</li>
            <li>History</li>
        </ul>
        <ul>
            <li>Explore</li>
            <li>Trending</li>
            <li>Shopping</li>
            <li>Music</li>
            <li>Movies & Shows</li>
            <li>Gaming</li>
            <li>News</li>
            <li>Sports</li>
            <li>Learning</li>
            <li>Fashion & Beauty</li>
        </ul>
    </div>
  )
}

export default SideBar