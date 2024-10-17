import React, { useRef } from 'react'

const EventHandlers : React.FC = () => {
    const toBottom = useRef<HTMLDivElement>(null)
    const toTop = useRef <HTMLButtonElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    function scrollToBottom() {
        toBottom.current?.scrollIntoView({ behavior: 'smooth' })
    }
    function scrollToTop(){
        toTop.current?.scrollIntoView({ behavior: 'smooth' })
    }
    const handleSetAttribute =() =>{
        inputRef.current?.setAttribute('style', 'background-color:red')
    }
  return (
    <>

        <h1>Event Handlers</h1>
        <input ref={inputRef} type="text" className='border-gray-950 border-2' />
        <div>
            <button ref={toTop} onClick={scrollToBottom}className='bg-red-500'>Scroll to bottom</button>
        </div>

        <div style={{ height: '2000px' }} /> 
        <div>
            <button onClick={()=> handleSetAttribute()} className='bg-red-500'>Make the input background red</button>
        </div>

            <div ref={toBottom} onClick={scrollToTop} style={{ height: '100px', backgroundColor: 'lightblue' }}>
                Scroll to this element!
            </div>
    </> 
    
  )
}

export default EventHandlers