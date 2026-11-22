import React, {useState} from "react";

export function FavoriteColor(){
    const [color, setColor] = useState("red");

    return (
        <>
        <h1>THE COLOR IS: {color} </h1>
        <button onClick={() => setColor("blue")}>BLUE</button>
        <button onClick={() => setColor("greeen")}>GREEN</button>
        <button onClick={() => setColor( "purple")}>PURPLE</button>

        </>
    );
}