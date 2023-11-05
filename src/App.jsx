import { useEffect } from "react"
import AdSplide from "./components/AdSplide"
import Header from "./components/Header"
import Menu from "./components/Menu"
import Products from "./components/Products"
import { useDispatch } from "react-redux"
import { getProducts } from "./redux/actions/productAction"

function App() {
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getProducts());
  },[]);

  return (
    <div>
     <Header/>
     <div className="border border-[#89919A] mt-4"></div>
     <Menu/>
     <AdSplide/>
     <Products/>
    </div>
  )
}

export default App
