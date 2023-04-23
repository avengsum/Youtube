import { Provider } from "react-redux"
import Nav from "./components/Nav"
import SideBar from "./components/SideBar"
import store from './utilis/store'

function App() {

  return (
    <>
    <Provider store={store}>
     <Nav />
     <SideBar />
     </Provider>
  
    </>
  )
}

export default App
