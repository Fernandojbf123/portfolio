import { Link } from "react-router-dom"

const LogoSection = () => {
    return (
        <div className="min-w-[300px] text-white">
            <Link to="/index" className={`w-1/3 flex items-center gap-3 hover:scale-[1.02] hover:text-[--tertiary] active:scale-[98%] active:text-[--secondary] active:duration-0`}>
                <img
                    className="w-[100px] h-[100px]"
                    src="/bellodev_header.webp"
                    alt="decoration logo"
                />
                <h1 className="text-4xl font-[Source Code Pro] font-bold">BELLODEV</h1>
            </Link>
        </div>
    )
}

export default LogoSection
