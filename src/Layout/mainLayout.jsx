import { Outlet } from "react-router-dom"
import Header from "../components/header"
import Footer from "../components/footer"

const MainLayout = () => {
  return (
    <div className="flex flex-col bg-gradient-to-br from-gray-900 via-slate-800 to-gray-700">  
        <Header />
          {/* index */}
          <Outlet /> 
        <Footer />
    </div>

  )
}

export default MainLayout

// all components are children of the div of this Layout
