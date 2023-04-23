import { Provider } from "react-redux"
import Nav from "./components/Nav"
import SideBar from "./components/SideBar"
import store from './utilis/store'
import Body from "./components/Body"

function App() {

  return (
    <>
    <Provider store={store}>
     <Nav />
     <Body />
     </Provider>
  
    </>
  )
}

export default App
