import AnimateLetter from "../components/animateLetter"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Welcome = () => {

    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()


  useEffect ( () => {
    setTimeout( ()=> {
      setIsLoading(false)
      setTimeout( ()=> {
        navigate("/index")
      },500)
    },4200)
  },[navigate])


  return (
    <div className={`w-screen h-screen transition-all duration-700 bg-gradient-to-br from-black/60 via-slate-900/40 to-slate-700/40  ${!isLoading && "translate-y-[-100%]"}`}>
        <div className="absolute backdrop-blur-sm w-screen h-screen">
            <div className="flex justify-center items-end h-2/5 md:h-4/5">
                <AnimateLetter 
                    letter={"B"}
                    animationDirection={"animate-l-r"}
                />
                <AnimateLetter 
                    letter={"E"}
                    animationDirection={"animate-t-b"}
                />
                <AnimateLetter 
                    letter={"L"}
                    animationDirection={"animate-l-r"}
                />
                <AnimateLetter 
                    letter={"L"}
                    animationDirection={"animate-t-b"}
                />
                <AnimateLetter 
                    letter={"O"}
                    animationDirection={"animate-l-r"}
                />
                <AnimateLetter 
                    letter={"D"}
                    animationDirection={"animate-t-b"}
                />
                <AnimateLetter 
                    letter={"E"}
                    animationDirection={"animate-l-r"}
                />
                <AnimateLetter 
                    letter={"V"}
                    animationDirection={"animate-t-b"}
                />
            </div>

            <div className="text-center text-2xl font-bold animate-pulse text-slate-300 ">
                LOADING...
            </div>
        </div>
        
        <div className="h-full w-full p-5">
            <img 
                className="w-full"
                src="./welcome_banner.png"
                alt={"welcome banner"}
            />
        </div>

        
    </div>
  )
}

export default Welcome
