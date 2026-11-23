import { useEffect, useRef, useState } from "react";


export function UseRef(){
    const count = useRef(0);
    const [inputValue, setInputValue] = useState("");

    useEffect (() =>{
        count.current = count.current + 1;
    })

    return (
        <>
            <input type="text" value={inputValue} onChange={(e) => { setInputValue(e.target.value)}}>

            </input>
            <h1>Render count: {count.current} </h1>
        </>
    )

}
//FOCUS INPUT
export function Focusing(){
    const focusInput = useRef();

    const focusing = () =>{
        focusInput.current.focus();
    }

    return (<>
        <input type="text" ref={focusInput}/>
        <button onClick={focusing}>Focus Input</button>
    </>)
} 

//TRACK CHANGES
export function OldState(){
    const previousValue = useRef("");
    const [inputValue, setInputValue] = useState("");

    useEffect( () => {
        previousValue.current = inputValue;

    }, [inputValue])

    return(<>
        <input type="text" 
        value={inputValue}  
        onChange={(e) => setInputValue(e.target.value)}/>
        <h1>Previous state value: {previousValue.current} </h1>
        <h1>Present  state value: {inputValue}</h1>
    </>)
}