import ImgProfile from "/aboutme_picture.avif"

const Hero = () => {

    return (
    <>
        <header
            id="hero"
            className="w-full min-h-screen bg-cover bg-no-repeat bg-center bg-[url('/bg_computer.avif')]">
            
            <div className="md:pt-72 pt-44 flex flex-col flex-grow">
                <div className="container mx-auto flex flex-col md:flex-row justify-center gap-10 p-3 ">
                    <div className="w-full md:w-2/5 h-full p-3 flex flex-col gap-2 bg-slate-700/80 md:bg-slate-700/50 rounded-lg shadow-md shadow-slate-500 hover:backdrop-blur-sm">
                        <h1 className="text-slate-50 text-5xl font-black">{"Frontend Developer"}</h1>
                        <h2 className="text-slate-200 text-3xl font-black mt-3">{`Specialized in `} <span className="text-[--tertiary]">{`software solutions `}</span>{`and providing a quality service for my clients`}</h2>
                        <div className="mt-5 [&>p]:text-slate-50 [&>p]:text-xl [&>p>span]:text-sky-300">
                            <p
                                className=""
                            >{`Experienced web developer skilled in building `} <span className="!text-[--secondary]">{`web pages `}</span>{`& `}<span className="!text-[--secondary]">{`web applications `}</span>{`using TOP TIER TECHS `}
                                <span className="!text-[--tertiary]">{` to fullfil your company needs`}</span>
                            </p>
                            <a href="./CV_bellodev_english.pdf" download="./CV_bellodev_english">
                                <button 
                                    className="py-2 px-3 text-slate-200 uppercase mt-3 bg-slate-800 rounded-md active:scale-90 active:bg-[--secondary] hover:bg-[--tertiary] hover:text-[--quaternary] " 
                                    type="download"
                                    >Download CV
                                </button>
                            </a>
                        </div>
                    </div>

                    <figure className=" [&>p]:text-slate-50 [&>p]:text-xl [&>p>span]:text-sky-300">
                        <img 
                            src={ImgProfile} 
                            alt="Picture of Fernando" 
                            className="h-[80%] rounded-full border-slate-600 border-[10px] mx-auto" />
                    </figure>
                </div>

                
            </div>

            
           
            

           
            

        </header>

        
    </>
    )
}

export default Hero
