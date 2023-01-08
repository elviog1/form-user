import React, { useState } from 'react'
import { saveItems } from '../api'
import Input from './Input'
import Select from './Select'
import swal from 'sweetalert'
import { Link } from 'react-router-dom'
export default function Form() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [date,setDate] = useState("")
  const [select,setSelect] = useState("argentina")
  const [user,setUser] = useState(false)

  const handleNameOnChange = (e)=>{
    setName(e)
  }
  const handleEmailOnChange = (e)=>{
    setEmail(e)
  }
  const handleDateOnChange = (e)=>{
    setDate(e)
  }
  const handleCountryOnChange = (e)=>{
    setSelect(e)
  }
  const submitFirebase = (e)=>{
    e.preventDefault()
    if(name.length <3){
      swal("Error!", `Su nombre debe tener minimo 3 caracteres`, "error");
    }else if(email.length <1){
      swal("Error!", `Ingrese un email por favor`, "error");
    }else{
      saveItems({
        name,
        email,
        date,
        select
      })
      setUser(!user)
      swal("Perfecto !", ` ¡ El usuario ${name} fue registrado exitosamente !`, "success");
    }
  }


  return (
    <div className='div-form'>
      <form className="form-container" onSubmit={submitFirebase}>
          <Input type="text" name="full_name" req={true} label="Nombre completo" onChange={handleNameOnChange} />
          <Input type="email" name="email" req={true} label="Correo electrónico" onChange={handleEmailOnChange} />
          <Input type="date" name="birth_date" req={true} label="Fecha de nacimiento" onChange={handleDateOnChange} />
          <Select name="country_of_origin" req={true} label="¿Cuál es tu país de origen?" onChange={handleCountryOnChange} />
          <Input type="checkbox" name="terms_and_conditions" req={true} label="¿Acepta los términos y condiciones?" />
          <Input name="submit-form" type="submit"/>
      </form>
      {user && <button className='link-users'><Link className='link'  to="/usuarios">Usuarios</Link></button>}
    </div>
  )
}
