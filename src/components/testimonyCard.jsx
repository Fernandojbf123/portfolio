
const TestimonyCard = ({name, position,srcImg, testimony,link}) => {
  return (
    <div className="py-6 px-4 min-w-[250px] max-w-[350px] h-auto flex flex-col rounded-md bg-gradient-to-r from-gray-50 to-white backdrop-blur-sm border
                       hover:bg-yellow-500    
    ">
       <p className="h-[120px] text-sm">{`${testimony}`}</p>
        
        <div className="flex flex-row gap-5">
                <img    
                    className="w-[60px] aspect-square rounded-full"
                    src={srcImg}
                    alt={`${name} profile picture`}
                />
                <a 
                    href={link}
                    className="[&>h3]:hover:scale-105 [&>p]:hover:scale-105 active:scale-95"
                    >
                    <h3 className="text-xl font-bold text-slate-700">{name}</h3>
                    <p className="text-xs text-slate-900">{position}</p>
                </a>
            
        </div>
        
    </div>
  )
}

export default TestimonyCard
