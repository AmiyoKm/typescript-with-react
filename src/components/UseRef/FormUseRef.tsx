import React, { FormEvent, useRef } from 'react'
type Form ={
    name : string
    email : string
    password :string
}
const FormUseRef = () => {
    const [form, setForm] = React.useState<Form>({
        name : '',
        email : '',
        password : ''
    })
     const name = useRef<HTMLInputElement>(null)
     const email = useRef<HTMLInputElement>(null)
     const pass = useRef<HTMLInputElement>(null)

     const handleChange = (event : FormEvent<HTMLFormElement> )=>{
        event.preventDefault();
        const newName  = name.current?.value
        const newEmail = email.current?.value
        const newPass= pass.current?.value

        if(newName && newEmail && newPass){
            setForm({

                name : newName,
                email : newEmail ,
                password : newPass
            })
        }
        
     }
  return (
    <div className="container mx-auto p-4">
        <form onSubmit={handleChange} className="flex flex-col space-y-4">
            <input type="text" ref={name}  className="border-2 p-2 rounded-lg "/>
            <input type="text" ref={email}  className="border-2 p-2 rounded-lg "/>
            <input type="password" ref={pass}  className="border-2 p-2 rounded-lg "/>
            <button type='submit' className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Add</button>
        </form>
        <p className="text-lg">Name:{form.name}</p>
        <p className="text-lg">Email:{form.email}</p>
        <p className="text-lg">Password:{form.password}</p>
    </div>
  )
}

export default FormUseRef