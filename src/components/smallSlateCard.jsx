
const SmallSlateCard = ({title, srcImg,altText,caption}) => {
    return (
        
    <figure className="p-2 min-w-[250px] max-w-[350px] h-auto flex flex-col rounded-md bg-gradient-to-r from-gray-700/50 to-slate-500/50 backdrop-blur-sm border
                       hover:bg-yellow-500    
    ">
        <h3 className="h-[70px] flex items-center justify-center text-2xl text-center font-bold text-slate-200">{title}</h3>
        <img    
            className="h-[180px]"
            src={srcImg}
            alt={altText}
        />
        <div className="flex flex-col">
            <figcaption className="text-justify pt-3 text-slate-300 h-[120px]">{caption}</figcaption>
        </div>
        
    </figure>
    )
}

export default SmallSlateCard
