import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import { Routes, Route, Router } from "react-router-dom";
import { Component } from 'react';
import Navbar from './components/Navbar';



function App() {
  return (
    <>
       <Navbar/>
          <Routes>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
   </>
  );
}

export default App;
