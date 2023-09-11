import { useState, useEffect, useRef } from "react";

const AnimateComponent = ({children}) => {

    const element = useRef(null)

    useEffect(() => {

        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: "0.93",
        }

        const observer = new IntersectionObserver(onIntersection, observerOptions)
        observer.observe(element.current)
        
    })

    function onIntersection(entry) {
        const $element = entry[0].target
        
        if (entry[0].isIntersecting) {
            $element.setAttribute("class", "animate__bounceIn")
            return
        }
    }

return (
    <div className="opacity-0" ref={element}>
        {children}
    </div>
)
}

export default AnimateComponent