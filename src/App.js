import "./App.css";
import Signin from "./components/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SignUp from "./components/Signup";
import Employee from "./components/Employee/EmployeeDetailsComp.jsx";
import Reports from './components/Reports/Reports'
import EmployeeForm from "./components/Employee/EmployeeForm.jsx";

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
          <Route path="/addemployee" element={<EmployeeForm />} />
          <Route path="/reports" element={<Reports />}></Route>
          <Route path="/empForm" element={<EmployeeForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
