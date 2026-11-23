import { useState } from "react";


export function Car(){
    const [car, setCar] = useState({
        model: "Mustang",
        color: "red",
        year: "1950",
        brand: "Ford"
    })

    function updateColor(){
        setCar( previousState => {
            return {...previousState, color: "green"}
        })
    }
    return (
        <>
            The car brand is {car.brand}, color is {car.color}, year is {car.year}, model is {car.model}

        <button onClick={updateColor}>MAKE IT GREEN</button>
        </>
    )
}