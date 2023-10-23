import "./App.css";
import Signin from "./components/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SignUp from "./components/Signup";
import Employee from "./components/Employee/EmployeeDetailsComp.jsx";
import Reports from './components/Reports/Reports'
import EmployeeForm from "./components/Employee/EmployeeForm.jsx";
import Shifts from "./components/Shift/Shift.jsx";
import Permissions from "./components/Permissions/Permissions.jsx";
import Evaluation from "./components/Evaluation/Evaluation.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Sidebar />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/shifts" element={<Shifts />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/addemployee" element={<EmployeeForm />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/perm" element={<Permissions />} />
          <Route path="/eva" element={<Evaluation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
