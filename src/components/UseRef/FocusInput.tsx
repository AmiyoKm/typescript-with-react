import React, { useRef } from 'react'

const FocusInput = () => {
    const ref = useRef<HTMLInputElement>(null)
    function handleClick(){
        ref.current?.focus()
    }
  return (
    <div className="flex space-x-2">
        <input type="text" ref={ref} className="border-2 p-2 rounded-lg w-64"/>
        <button onClick={handleClick} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Focus</button>
    </div>
  )
}

export default FocusInput