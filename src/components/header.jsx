import useScreenSize from "../hooks/useScreenSize"
import { useEffect, useState } from "react"
import MobileNavBar from "./mobileNavBar"
import NavBar from "./navBar"
import LogoSection from "./logoSection"
import HamburgerMenu from "./hamburgerMenu"

const Header = () => {

  const screenSize = useScreenSize()
  const [isMobile, setIsMobile] = useState(false);
  const [isNavBarActive, setIsNavBarActive] = useState(false);

  useEffect( () => {
    if(screenSize.width<1350){
      setIsMobile(true)
      return
    }
    setIsMobile(false)
  },[screenSize])

  function handleNavBar () {
    setIsNavBarActive(!isNavBarActive)
    if (!isNavBarActive){
      disableScroll()
      return
    }
    enableScroll()
  }

  function disableScroll() {
    // Get the current page scroll position
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // if any scroll is attempted, set this to the previous value
    window.onscroll = () => {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }

function enableScroll() {
    window.onscroll = function() {};
}

  return (

    <>
      <header className="p-5 fixed w-full h-32 flex flex-row justify-between bg-gradient-to-r from-gray-700/70 to-slate-500/70 border-b border-white z-10">
        
        <LogoSection />

        {isMobile ? (
          <div className=" ">
            

            <HamburgerMenu 
              handleNavBar={handleNavBar}/>

            <MobileNavBar 
              isNavBarActive={isNavBarActive}
              handleNavBar={handleNavBar}/>
          </div>

        ):(
          
             
            <NavBar />
          
        )}
      </header>
    </>
  )
}

export default Header




