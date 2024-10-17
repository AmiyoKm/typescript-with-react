import React, { ReactNode } from 'react'

import {Form} from './FormContact.tsx'
const DisplayFormContact = ({form} : {form : Form}) => {
   
  return (
    <div>
        <p>UserName: {form.userName}</p>
        <p>First Name: {form.firstName}</p>
        <p>Last Name: {form.lastName}</p>
        <p>About: {form.about}</p>
        <p>Email: {form.email}</p>
        <p>Country: {form.country}</p>
        <p>City: {form.city}</p>
        <p>Street: {form.street}</p>
        <p>State: {form.state}</p>
        <p>ZipCode: {form.zipCode}</p>
    </div>
  )
}

export default DisplayFormContact