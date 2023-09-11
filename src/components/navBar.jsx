import { useEffect, useState } from "react"
import { HashLink } from "react-router-hash-link"
import useGetParentId from "../hooks/useGetParentId"

const NavBar = () => {
  
  const {elementId, handleEnter, handleLeave} = useGetParentId()
  const [animate, setAnimate] = useState(false)


  useEffect(() => {
    setAnimate(false)
    if (elementId != null) {
      setTimeout(() => {
        setAnimate(true)
      }, 100)
    }
  }, [elementId])


  return (
    <nav className="w-full h-fit p-3 flex flex-row justify-end">
      <ul id="index" className="min-w-[250px] p-1 justify-center h-[50px]" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        <HashLink smooth to="/index#hero" className="[&>li]:active:bg-yellow-300 [&>li]:active:scale-95 [&>li]:hover:bg-[--tertiary]">
          <li className="font-bold px-5 py-2 text-[--quaternary] border-slate-400 border flex bg-slate-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 mr-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
            {`index`}<span className="text-[--tertiary]">~</span>
          </li>
        </HashLink>
        
        <div className={` ${elementId==="index" ? "" : "opacity-0 hidden"}`}>
          <HashLink smooth to="/index#clientList" className="[&>li]:active:bg-yellow-300 [&>li]:active:scale-95 [&>li]:hover:bg-[--tertiary]">
            <li className={`font-bold px-5 py-2 text-[--quaternary] border-slate-400 border flex bg-slate-800 ${animate ? "-translate-y-[0%]" : "-translate-y-[100%]"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                </svg>
              {`clients`}<span className="text-[--tertiary]">~</span>
            </li>
          </HashLink>

          <HashLink smooth to="/index#problems" className="[&>li]:active:bg-yellow-300 [&>li]:active:scale-95 [&>li]:hover:bg-[--tertiary]">
            <li className={`font-bold px-5 py-2 text-[--quaternary] border-slate-400 border flex bg-slate-800 ${animate ? "-translate-y-[0%]" : "-translate-y-[200%]"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                </svg>
              {`problems?`}<span className="text-[--tertiary]">~</span>
            </li>
          </HashLink>
          <HashLink smooth to="/index#benefits" className="[&>li]:active:bg-yellow-300 [&>li]:active:scale-95 [&>li]:hover:bg-[--tertiary]">
            <li className={`font-bold px-5 py-2 text-[--quaternary] border-slate-400 border flex bg-slate-800 ${animate ? "-translate-y-[0%]" : "-translate-y-[300%]"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
              {`whyHiring?`}<span className="text-[--tertiary]">Me~</span>
            </li>
          </HashLink>
          <HashLink smooth to="/index#testimonials" className="[&>li]:active:bg-yellow-300 [&>li]:active:scale-95 [&>li]:hover:bg-[--tertiary]">
            <li className={`font-bold px-5 py-2 text-[--quaternary] border-slate-400 border flex bg-slate-800 ${animate ? "-translate-y-[0%]" : "-translate-y-[400%]"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              {`testimonials`}<span className="text-[--tertiary]">{`Me~`}</span>
            </li>
          </HashLink>
        </div>
      </ul>

      <ul id="about" className="min-w-[250px] p-1 justify-center h-[50px]" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        <HashLink smooth to="/aboutme#top" className="[&>li]:active:bg-yellow-300 [&>li]:active:scale-95 [&>li]:hover:bg-[--tertiary]">
          <li className="font-bold px-5 py-2 text-[--quaternary] border-slate-400 border flex bg-slate-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
            {`about`}<span className="text-[--tertiary]">{`Me~`}</span>
          </li>
        </HashLink>
      </ul>

      <ul id="projects" className="min-w-[250px] p-1 justify-center h-[50px]" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        <HashLink smooth to="/projects" className="[&>li]:active:bg-yellow-300 [&>li]:active:scale-95 [&>li]:hover:bg-[--tertiary]">
          <li className="font-bold px-5 py-2 text-[--quaternary] border-slate-400 border flex bg-slate-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
            {`projects`}<span className="text-[--tertiary]">{`~`}</span>
          </li>
        </HashLink>
      </ul>

      <ul id="learning" className="min-w-[250px] p-1 justify-center h-[50px]" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        <HashLink smooth to="/error" className="[&>li]:active:bg-yellow-300 [&>li]:active:scale-95 [&>li]:hover:bg-[--tertiary]">
          <li className="font-bold px-5 py-2 text-[--quaternary] border-slate-400 border flex bg-slate-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
            {`learning`}<span className="text-[--tertiary]">{`~`}</span>
          </li>
        </HashLink>
      </ul>

    </nav>
  )
}

export default NavBar

