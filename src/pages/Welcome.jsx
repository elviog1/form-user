
import Form from "../components/Form";
import '../styles/Welcome.css'
function Welcome() {
  return (
    <div className="welcome-container">
      <div>
        <h1 className='form-title'>Formulario de inscripción</h1>
        <Form />
      </div>
    </div>
  );
}

export default Welcome;
