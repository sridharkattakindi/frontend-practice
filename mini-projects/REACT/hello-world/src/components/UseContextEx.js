//WITHOUT USE CONTEXT

// import { useState } from "react";

// export function Comp1(){
//     const [user, setUser] = useState("Jesse Hall");

//     return (<>
//        <h1> Hello, {user}</h1>
//         <Comp2 user = {user}/>
//     </>)
// }
// function Comp2 ({user}){
//     return (<>
//         <h1> Hello, {user}</h1>
//         <Comp3 user = {user}/>
//     </>)
// }

// export function Comp3 ({user}){
//     return (<>
//         <h1> Hello, {user}</h1>
//     </>)
// }


//  WITH USE CONTEXT

import { createContext, useContext, useState } from "react";
const UserContext = createContext();
export function Comp1(){
    const [user, setUser] = useState("Jesse Hall");
    
    return (
        <UserContext.Provider value = {user}>
       <h1>{ ` comp1 Hello, ${user}` }</h1>
        <Comp2/>
        </UserContext.Provider>)
}
function Comp2 (){
    return (<>
        <h1> Hello</h1>
        <Comp3/>
    </>)
}

export function Comp3 (){
    const user =    useContext(UserContext);
    return (<>
        <h1> Comp 3 Hello, {user}</h1>
    </>)
}

