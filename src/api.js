import {  addDoc, collection, getDocs, query } from 'firebase/firestore'
import  {db} from './firebase'

export const saveItems = (data)=>{
    addDoc(collection(db,"user"),{data})
}
export const getItemsFirebase = async ()=>{
    const result = await getDocs(query(collection(db,"user")))
    return result
}