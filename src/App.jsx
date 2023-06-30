import { Provider } from "react-redux"
import Nav from "./components/Nav"
import SideBar from "./components/SideBar"
import store from './utilis/store'
import Body from "./components/Body"
import { createBrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import { Outlet } from "react-router-dom"
import { RouterProvider } from "react-router-dom"
import VideoPage from "./components/VideoPage"
import AddVideo from "./components/AddVideo"
import MyVideo from "./components/MyVideo"
import UploadVideo from "./components/UploadVideo"
import SearchVideo from "./components/SearchVideo"
import SearchVideoPage from "./components/SearchVideoPage"

const appRouter = createBrowserRouter([
  { path:'/',
  element:<Body />,
  children:[{
    path:'/',
    element:<Home />
  },
  {
    path:'/watch',
    element:<VideoPage />,
  },
  {
    path:'/addVideo',
    element:<AddVideo />
  },
  {
    path:'/myVideo',
    element:<MyVideo />
  },

]
    },
])

function App() {


  return (
    <Provider store={store}>
    <>
    {/*<Nav />
    
  <RouterProvider router={appRouter} />*/}
  <SearchVideoPage />
  

    </>
    </Provider>
    
  )
}




export default App
