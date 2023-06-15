import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
const SideBar = () => {

    const isMenu = useSelector(store => store.app.isSideBar)

    return !isMenu ? null : (
  <div class="flex flex-row">
      <div className=".sidebar" >
          <div class="flex flex-col w-full mb-2">
              <div class="flex items-center space-x-5 bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">

                  <h2 class="text-sm font-semibold text-gray-600">Home</h2>
              </div>

              <div class="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">
                  <h2 class="text-sm text-gray-600">Explore</h2>
              </div>

              <div class="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">
                  <h2 class="text-sm text-gray-600">Subscriptions</h2>
              </div>

          </div>

          <div class="border border-searchIconBg"></div>
          <div class="flex flex-col w-full mb-2 mt-3">

              <div class="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">
                  <h2 class="text-sm text-gray-600">Library</h2>
              </div>

              <div class="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">
                  <h2 class="text-sm text-gray-600">History</h2>
              </div>

              <div class="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">
                
                  <h2 class="text-sm text-gray-600">Your videos</h2>
              </div>

              <div class="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">
                  <h2 class="text-sm text-gray-600">Watch later</h2>
              </div>

              <div class="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">
                  <h2 class="text-sm text-gray-600">Liked videos</h2>
              </div>

          </div>

          <div class="border border-searchIconBg"></div>
          <div class="flex flex-col w-full mb-2 mt-3">
              <h2 class="uppercase text-sm px-7 py-1.5 text-gray-400">more from youtube</h2>

              <div class="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">

                  <h2 class="text-sm text-gray-600">YouTube Premium</h2>
              </div>

              <div class="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">
                  
                  <h2 class="text-sm text-gray-600">Films</h2>
              </div>

              <div class="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">
                  
                  <h2 class="text-sm text-gray-600">Gaming</h2>
              </div>

              <div class="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">
                  
                  <h2 class="text-sm text-gray-600">Live</h2>
              </div>

              <div class="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">
                  
                  <h2 class="text-sm text-gray-600">Fashion & beauty</h2>
              </div>

              <div class="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">
                  
                  <h2 class="text-sm text-gray-600">Learning</h2>
              </div>

              <div class="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">
                  
                  <h2 class="text-sm text-gray-600">Sport</h2>
              </div>

          </div>

          <div class="border border-searchIconBg"></div>

          <div class="flex flex-col w-full mb-2 mt-3">

              <div class="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">
                  
                  <h2 class="text-sm text-gray-600">Settings</h2>
              </div>

              <div class="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">
                  
                  <h2 class="text-sm text-gray-600">Report history</h2>
              </div>

              <div class="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">
                  
                  <h2 class="text-sm text-gray-600">Help</h2>
              </div>

              <div class="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">
                  
                  <h2 class="text-sm text-gray-600">Send feedback</h2>
              </div>
          </div>

          <div class="border border-searchIconBg"></div>

          <div class="flex flex-col px-6 py-2">
              <div class="flex flex-wrap space-x-2">
                  <p class="text-xs text-gray-400" href="">About</p>
                  <p class="text-xs text-gray-400" href="">Press</p>
                  <p class="text-xs text-gray-400" href="">Copyright</p>
                  </div>
                  <div class="flex flex-wrap space-x-2">
                  <p class="text-xs text-gray-400" href="">Contact us</p>
                  <p class="text-xs text-gray-400" href="">Creator</p>
                  <p class="text-xs text-gray-400" href="">Advertise</p>
                  </div>
                  <p class="text-xs text-gray-400" href="">Developers</p>
          </div>
          <div class="flex flex-col px-6 py-2">
              <div class="flex flex-wrap space-x-2">
                  <p class="text-xs text-gray-400" href="">Terms</p>
                  <p class="text-xs text-gray-400" href="">Privacy</p>
                  <p class="text-xs text-gray-400" href="">Policy & Safety</p>
                  </div>
                  <p class="text-xs text-gray-400" href="">How YouTube works</p>
                  <p class="text-xs text-gray-400" href="">Test new features</p>
          </div>
            <span class="text-gray-500 text-xs px-6 py-2">&copy; 2021 Google LLC</span>

      </div>
  </div>

  )
}

export default SideBar