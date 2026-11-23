
import React, { useEffect, useState } from "react";

export const Counter = () => {
    const[count, setCount] = useState(0);

    useEffect(() =>{
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 3000)
    }, []);

    return (<>
        Present count is {count}.
    </>)
};
