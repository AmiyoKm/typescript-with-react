
interface ButtonWork {
    label: string
    disabled?: boolean
    onClick: () => void
}
const Button = ({label , disabled , onClick}: ButtonWork) => {
  return (
    <div>
        <button onClick={onClick} disabled={disabled} className='drop-shadow-2xl cursor-pointer bg-green-700 p-7 font-serif text-2xl m-5 rounded-lg active:drop-shadow-none'>Button 1: {label}</button>
        <button onClick={onClick} disabled={!disabled} className='drop-shadow-2xl cursor-pointer bg-red-700 p-7 font-serif text-2xl m-5 rounded-lg active:drop-shadow-none'>Button 2: {label}</button>

    </div>
  )
}

export default Button