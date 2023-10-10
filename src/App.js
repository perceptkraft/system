import "./App.css";
import Signin from "./components/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SignUp from "./components/Signup";
import Employee from "./components/Employee/EmployeeDetails";
import Reports from './components/Reports/Reports'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Sidebar />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/reports" element={<Reports />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
