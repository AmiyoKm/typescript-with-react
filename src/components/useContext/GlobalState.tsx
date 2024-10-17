import React, { createContext, FC, ReactNode, useState } from 'react'

interface userContext {
    counter :number 
    increment : ()=> void
    decrement : ()=> void
}
interface Children {
    children : ReactNode
}
export const userContext = createContext<userContext>({
    counter :0,
    increment(){
        
    },
    decrement(){

    }
}
   
)
const GlobalState : FC<Children> = ({children}) => {
    const [count,setCount] = useState<number>(0)
    function increment(){
        setCount(count+1)
    }
    function decrement(){
        setCount(count-1)    
    }

  return (
    <userContext.Provider value={{counter: count , increment , decrement }}>
        {children}
    </userContext.Provider>
    
  )
}

export default GlobalState