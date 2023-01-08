import { useNavigate } from "react-router-dom";
import TableUsers from "../components/TableUsers";
import '../styles/Users.css'
export default function Users() {
    const navigate = useNavigate()
  return (
    <div className='user-container'>
        <TableUsers />
        <button className="user-button" onClick={()=> navigate("/")}>Volver</button>
    </div>
  )
}
