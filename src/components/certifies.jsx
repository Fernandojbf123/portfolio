
const Certifies = () => {
  
    const size = {
        width: "400",
        height: "400",
    }
  
    return (


    <div className="flex flex-row flex-wrap gap-5">

        <h2 className="text-slate-200 text-2xl font-bold uppercase">Certifications</h2>

        <a href="./certifies/javascript_basic.pdf" download="./certifies/javascript_basic.pdf">
            <img src="./certifies/javascript_basic.png" alt="Javascript basic certify" width={size.width} height={size.height} />
        </a>

        <a href="./certifies/javascript_intermediate.pdf" download="./certifies/javascript_intermediate.pdf">
            <img src="./certifies/javascript_intermediate.png" alt="Javascript intermediate certify" width={size.width} height={size.height} />
        </a>

        <a href="./certifies/react_basic.pdf" download="./certifies/react_basic.pdf">
            <img src="./certifies/react_basic.png" alt="React basic certify" width={size.width} height={size.height} />
        </a>

        <a href="./certifies/sql_basic.pdf" download="./certifies/sql_basic.pdf">
            <img src="./certifies/sql_basic.png" alt="SQL basic certify" width={size.width} height={size.height} />
        </a>

    </div>
  )
}

export default Certifies
