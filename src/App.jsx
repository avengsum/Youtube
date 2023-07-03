import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux"
import Nav from "./components/Nav"
import SideBar from "./components/SideBar"
import store from './utilis/store'
import Body from "./components/Body"
import { createBrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import { Outlet } from "react-router-dom"
import { RouterProvider , BrowserRouter , Route , Routes} from "react-router-dom"
import VideoPage from "./components/VideoPage"
import AddVideo from "./components/AddVideo"
import MyVideo from "./components/MyVideo"
import UploadVideo from "./components/UploadVideo"
import SearchVideo from "./components/SearchVideo"
import SearchVideoPage from "./components/SearchVideoPage"



function App() {
  return(
    <Provider store={store}>
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<Body />} >
        <Route path='/' element={<Home />} />
        </Route>
        
      </Routes>
      </BrowserRouter>
    </Provider>
  )
}

// function App() {
//   return (
//     <Provider store={store}>
//     <>
//     <Nav />
//       <div className="flex">
//             <div className="w-1/6 text-gray-200">
//                <SideBar />
//             </div>
//             <div className="w-4/5" >
//                 <Outlet />
//             </div>
//         </div>
  

//     </>
//     </Provider>
    
//   )
// }

// const appRouter = createBrowserRouter([
//   { path:'/',
//   element:<App />,
//   children:[{
//     path:'/',
//     element:<Home />
//   },
//   {
//     path:'/watch',
//     element:<VideoPage />,
//   },
//   {
//     path:'/addVideo',
//     element:<AddVideo />
//   },
//   {
//     path:'/myVideo',
//     element:<MyVideo />
//   },{
//     path:'/search',
//     element:<SearchVideoPage />
//   },

// ]
//     },
// ])


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={appRouter} />);


export default App
