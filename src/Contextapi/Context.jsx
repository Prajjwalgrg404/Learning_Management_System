import { createContext, useState } from "react";


export const Counter = createContext(null);

export const CounterProvider = ({children})=>{
    const [count, setCount] = useState(0);
    return(
        <>
            <Counter.Provider value={{count,setCount}}>{children}</Counter.Provider>
        </>
    )
}