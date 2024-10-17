import React, { FC } from 'react'
import { useForm , SubmitHandler } from 'react-hook-form'
interface form {
    name : string
    age: number
    email : string
    password : string
}

const Form : FC = () => {
   const {register , handleSubmit , formState : {errors , isSubmitting}} =useForm<form>()
   const onSubmit: SubmitHandler<form> =(data) => {
    console.log(data)
   }
  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <label htmlFor="" className="block">
                Name
                <input type="text" className="border-2 p-2 rounded-lg w-full" {...register('name',{required : 'Name is Required'})} />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </label>
            <label htmlFor="" className="block">
                Age
                <input type="number" className="border-2 p-2 rounded-lg w-full" {...register('age',{required:'Age is Required'})} />
                {errors.age && <p className="text-red-500">{errors.age.message}</p>}
            </label>
            <label htmlFor="" className="block">
                email
                <input type="text" className="border-2 p-2 rounded-lg w-full" {...register('email',{required:'Email is Required'})} />
                {errors.email && <p className="text-red-500">{errors.email.message}</p> } 
            </label>
            <label htmlFor="" className="block">
                PassWord
                <input type="password" className="border-2 p-2 rounded-lg w-full" {...register('password',{required:'Password is required'})} />          
            </label>
            <button type='submit' className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg" disabled={isSubmitting}>
            {isSubmitting ? "Loading..." : "Submit"}</button>
        </form>
    </>
  )
}

export default Form