import SignUp from './components/Signup';
import Login from './components/Login';
import { Routes, Route, Router } from "react-router-dom";
import { Component } from 'react';
import Navbar from './components/Navbar';
import StudentPortal from './components/StudentPortal';
import CompanyPortal from './components/CompanyPortal';
import Landing from './components/Landing';

function App() {
  return (
    <>
       <Navbar/>

       
          <Routes>
          <Route path="/" element={<Landing/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/studentportal" element={<StudentPortal/>}/>
            <Route path="/companyportal" element={<CompanyPortal/>}/>
          </Routes>
   </>
  );  // <--- return() ends here
} // <--- App() function ends here

export default App;
