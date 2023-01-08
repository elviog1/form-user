import React from 'react'
import { useEffect, useState } from "react";
import { getItemsFirebase } from "../api";
import '../styles/TableUsers.css'
export default function TableUsers() {
    const [items,setItems] = useState(null)
    const nameTable = ["Nombre","Email","Nacimiento","Nacionalidad"]
  useEffect(()=>{
    getItemsData()
  },[])
  const getItemsData = async()=>{
    const item = await getItemsFirebase()
    setItems(item.docs.map(item => item.data()))
  }

  const printThTitle = (item,index)=>{
    return (
        <th className='th-title' key={index}>{item}</th>
    )
  }
  const printTdUsers = (item,index) =>{
    return (
        <tr className='td-user' key={index}>
            <td>{item.data.name}</td>
            <td>{item.data.email}</td>
            <td>{item.data.date}</td>
            <td>{item.data.select}</td>
        </tr>
    )
  }
  return (
    <div className='table-container'>
        <div className='div-users'>
            <table  className='table'>
                <thead className='thead'>
                    <tr className='thead-th'>
                       <th>Usuarios registrados</th>
                    </tr> 
                </thead>
                <tbody>
                  <tr>
                    {nameTable?.map(printThTitle)}
                  </tr>
                    {items?.map(printTdUsers)}
                </tbody>
            </table>
        </div>
    </div>
  )
}

