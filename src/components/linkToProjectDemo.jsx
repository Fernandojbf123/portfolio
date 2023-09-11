import { Link } from "react-router-dom"
const LinkToProjectDemo = ({ href, srcIcon, title, description, techTags, srcImg}) => {

    return (
        <div>
            <Link
                to={href}>
                <div className="w-full md:max-w-[480px] min-h-[300px] rounded-md flex flex-col bg-gradient-to-r from-slate-400/40 to-slate-600/40 border hover:scale-105 [&>header>h3]:text-slate-300 hover:[&>header>h3]:text-[--tertiary] active:scale-95 active:[&>header>h3]:text-[--secondary]">

                    <header className="p-5 flex items-center gap-4">
                        <img
                            className="w-[50px] h-[50px]"
                            src={`/projects/${srcIcon}`}
                            alt="decorative icon"
                        />
                        <h3 className='uppercase font-bold text-2xl text-left'>{title}</h3>
                    </header>

                    <div className="flex flex-col flex-grow px-6 py-1">
                        <figure>
                            <img className="mx-auto w-[280px] -mt-6 mb-5 aspect-square" src={`./projects/${srcImg}`} alt={`${title} demo image`} />
                            <figcaption className="px-2 min-h-[100px] text-sm text-slate-200 text-justify">{description}</figcaption>
                        </figure>
                        <div className="my-3 min-h-[65px] md:h-[65px] flex flex-row flex-wrap justify-center items-center gap-3 [&>p]:bg-slate-300 [&>p]:text-slate-700 [&>p]:text-xs [&>p]:rounded-xl [&>p]:text-center">
                            {techTags?.map(tag => (
                                <p
                                    key={tag}
                                    className="px-2 h-[25px] py-1 hover:scale-110 lowercase"
                                >{`#${tag}`}
                                </p>
                            ))}
                        </div>
                    </div>

                </div>
            </Link>
        </div>
    )
}

export default LinkToProjectDemo
