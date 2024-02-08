import { useState, useEffect } from 'react'

function UseScroll(containers: any[]): [number, number[]] {
    const [scrollY, setScrollY] = useState(0);
    let [height, setHeight] = useState([100]);
    
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            const heightList : number[] = [];
            for (let container of containers){
            if (container !== null) {
                let heightTemp = container.current!.offsetHeight
                heightList.push(heightTemp)
            } else { heightList.push(0) }
        }
        setHeight(heightList)
        };
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);
  return [scrollY, height]
}

export default UseScroll;