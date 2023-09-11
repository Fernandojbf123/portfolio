
const HamburgerMenu = ({handleNavBar}) => {
  return (
      <div className="h-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="text-white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white"
              className="w-10 h-10 active:scale-[90%] active:rotate-180"
              onClick={handleNavBar}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
      </div>
  )
}

export default HamburgerMenu
