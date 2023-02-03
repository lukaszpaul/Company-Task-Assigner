import SignUp from './components/Signup';
import Login from './components/Login';
import { Routes, Route} from "react-router-dom";
// import { Component } from 'react';
import Navbar from './components/Navbar';
import StudentPortal from './components/StudentPortal';
import CompanyPortal from './components/CompanyPortal';
import Landing from './components/Landing';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <>
       <Navbar/>
        <AuthContextProvider>
            <Routes>
              <Route path="/" element={<Landing/>}/>
              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/studentportal" element={<StudentPortal/>}/>
              <Route path="/companyportal" element={<CompanyPortal/>}/>
            </Routes>
        </AuthContextProvider>
   </>
  );  // <--- return() ends here
} // <--- App() function ends here

export default App;
