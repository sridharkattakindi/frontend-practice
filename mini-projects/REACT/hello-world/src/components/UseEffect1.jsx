import { useState } from "react";

export function Counter2(){
    const[count,setCount] = useState(0);

    // const increament = () =>{
    //     setCount(count +1);
    // }

    return (<>
        <h1>Count : {count}</h1>
        <button onClick={() => setCount(count+1)}>Increament button</button>
    </>)
}