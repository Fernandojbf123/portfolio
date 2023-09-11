
const SmallTransparentCard = ({title, benefit,srcImg}) => {
  return (
    <div className="py-6 px-4 min-w-[250px] max-w-[350px] h-[200px] flex flex-col rounded-md bg-gradient-to-r from-gray-50/10 to-white/10 backdrop-blur-sm border
                       hover:bg-yellow-500    
    ">  
        <figure className="flex justify-center">
            <img    
                className="w-[100px] aspect-square rounded-full absolute -top-16 border-[5px] bg-slate-200/60"
                src={srcImg}
                alt={title}
            />
        </figure>
        
        <div className="relative bottom-0 mt-5 flex flex-col gap-5 [&>h3]:hover:scale-105 [&>p]:hover:scale-105 active:scale-95">
              <h3 className="text-xl font-bold text-slate-50">{title}</h3>
              <p className="text-xs text-slate-200">{benefit}</p>
          </div>
        
    </div>
  )
}

export default SmallTransparentCard
