import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import Welcome from "./pages/Welcome";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/usuarios" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
