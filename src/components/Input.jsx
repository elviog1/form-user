import React from 'react'
import '../styles/Form.css'
export default function Input({label,type,name,req,onChange}) {
    const handleChange = e =>{
        onChange(e.target.value)
    }
    
  return (
    <div className='div-label-input'>
        <label className='label-name' htmlFor={name}>{label}</label>
        <input className='input' id={name} type={type} name={name} required={req} onChange={handleChange} />
    </div>
  )
}
