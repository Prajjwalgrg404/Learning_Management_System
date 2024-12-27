import { createContext, useState } from "react";


export const Counter = createContext(null);

export const CounterProvider = ({children})=>{
    const [count, setCount] = useState(0);
    const [change,setchange] = useState(0)
    return(
        <>
            <Counter.Provider value={{count,setCount,change,setchange}}>{children}</Counter.Provider>
        </>
    )
}