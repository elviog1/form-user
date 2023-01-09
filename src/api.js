import {  addDoc, collection, getDocs, query } from 'firebase/firestore'
import  {db} from './firebase'

//Almacena un usuario a firebase
export const saveItems = (data)=>{
    addDoc(collection(db,"user"),{data})
}
//Obtengo todos los usuarios de firebase
export const getItemsFirebase = async ()=>{
    const result = await getDocs(query(collection(db,"user")))
    return result
}