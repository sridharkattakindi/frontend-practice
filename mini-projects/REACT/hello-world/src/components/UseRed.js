import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state -1;
        case 'reset':
            return state = initialState;
        default: return state;
}
}
    export function Counter() {

        const [count, dispatch] = useReducer(reducer, initialState);
        return (<>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch('increment')}>INCREMENT</button>
            <button onClick={() => dispatch('decrement')}>DECREMENT</button>
            <button onClick={() => dispatch('reset')}>RESET</button>
        </>);
    }








    