import React from 'react'
import data from '../greydive' 
export default function Select({label,name,req,onChange}) {
    const selectValue =data.items.filter(item => item.type === "select")
    const optionsValue = selectValue[0].options
    const handleChange = e =>{
      onChange(e.target.value)
  }
  return (
    <div className='div-label-input'>
        <label className='label-name'>{label}</label>
        <select className='input' name={name} required={req} onChange={handleChange}>
            {optionsValue.map((item,index) =>(
                <option className='label-name' key={index} value={item.value}>{item.label}</option>
            ))} 
        </select>
    </div>
  )
}
