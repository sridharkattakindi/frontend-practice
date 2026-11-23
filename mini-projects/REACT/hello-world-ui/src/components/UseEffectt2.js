
import React, { useEffect, useState } from "react";

export const Counter = () => {
    const[count, setCount] = useState(0);
    const[calculation, setCalculation] = useState(0);

    useEffect(() =>{
        setTimeout(() => {
            setCalculation(() => count * 2);
        }, 3000)
    }, [count]);

    return (<>
        Present count is {count}.
        <button onClick={() => setCount((c) => c+1)}>+</button>
        calculation: {calculation}
    </>)
};

//CLEARING USEFFECT TO AVOID MEMORY LEAKS
export const Counter2 = () => {
    const[count, setCount] = useState(0);
    const[calculation, setCalculation] = useState(0);

    useEffect(() =>{
     let timout =    setTimeout(() => {
            setCalculation(() => count * 2);
        }, 3000);
        return  () => {
            clearTimeout(timout);
        }

    });

    return (<>
        Present count is {count}.
        <button onClick={() => setCount((c) => c+1)}>+</button>
        calculation: {calculation}
    </>)
};
