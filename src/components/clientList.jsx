import useScreenSize from "../hooks/useScreenSize"
import { useState, useEffect } from "react";


const ClientList = () => {

    const screenSize = useScreenSize();
    const [isMobile, setIsMobile] = useState(false);
    const [currentClient, setCurrentClient] = useState(0);
    
    const clientList = [
        {id:1, src: "/clients/geomaya_logo.avif"},
        {id:2, src: "/clients/fincamex_logo.avif"},
        {id:3, src: "/clients/uabc_logo.avif"},
        {id:4, src: "/clients/hypso_logo.avif"},
        {id:5, src: "/clients/samurai_burger_logo.avif"},
        {id:6, src: "/clients/micasamiterreno_logo.avif"},
        {id:7, src: "/clients/barbershop_logo.avif"},
        {id:8, src: "/clients/cicese_logo.avif"},
    ];

    useEffect( () => {
      if(screenSize.width<768){
        setIsMobile(true)
        return
      }
      setIsMobile(false)
      setCurrentClient(0)
    },[screenSize])

    useEffect ( () => {
        let timeOutId
        if (isMobile) {
            if(currentClient===clientList.length-1){
                timeOutId = setInterval( ()=> {                    
                    setCurrentClient(0)
  

                },4000)
                return () => clearInterval(timeOutId)
            }
    
            timeOutId = setInterval( ()=> {
                setCurrentClient( current => current+1)
            },4000)
            
            return () => clearInterval(timeOutId)
        }
        else{
            if(currentClient === clientList.length-3){
                timeOutId = setInterval( ()=> {
                    setCurrentClient(0)
                },4000)
                return () => clearInterval(timeOutId)
            }
    
            timeOutId = setInterval( ()=> {
                setCurrentClient( current => current+1)
            },4000)
            return () => clearInterval(timeOutId)
        }
    },[currentClient, clientList.length, isMobile])

  return (

    <div id="clientList" className="h-[350px] bg-slate-200">
        <h3 className="py-12 text-[--primary] text-6xl text-center">CLIENTS</h3>
    {isMobile ? (
        <div className="flex justify-center items-center ">
            <img
                className={`h-[120px] mt-3`} 
                src={clientList[currentClient].src} 
                alt={currentClient}/>
        </div>
    ):(
        <div className="bg-slate-200 flex justify-center items-center gap-4 [&>img]:h-[120px]">
            <img 
                src={clientList[currentClient].src} 
                alt={currentClient}/>
            <img
                src={clientList[currentClient+1].src} 
                alt={currentClient+1} />
            <img 
                src={clientList[currentClient+2].src} 
                alt={currentClient+2} />
        </div>
    )}
    </div>
  )
}

export default ClientList
