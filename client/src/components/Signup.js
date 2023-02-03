// File: /src/components/Signup.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignupContainer, AuthText, EmailInput, EmailText, PasswordInput, PasswordText, SubmitButton, OptionDrop, CompanyText } from '../styles/AuthElements';
// import { SignUpUser, checkIfEmailExists} from '../firebaseConfig';
import { UserAuth } from '../context/AuthContext'

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { createUser } = UserAuth();
  const navigate = useNavigate();


  // const navigate = useNavigate();

  const handleSignUp = async (e) => {

    // if (!email || !password) {
    //   setError('Please enter both an email and a password.');
    //   return;
    // }

    // e.preventDefault();
    // setError('');

    e.preventDefault();
    setError('');

    try {
      await createUser(email, password);
      console.log(`User ${email} was created`);
      navigate('/login')
      alert("ALL SET! \nPlease Login to your new account")
    } catch(error) {
      alert(error.message);
      console.log(error.message)
    }



    // try {
    //   await createUser(email, password);
    //   navigate('/studentportal');
    // } catch (error) {
    //   console.error(error);
    //   setError('Error occurred while signing up. Please try again later.');
    // }

  }; // <--- handSignUp() function ends here

  return (
    <SignupContainer>
      <AuthText>Sign Up</AuthText>

      <EmailText>Email: </EmailText>
      <EmailInput
        value={email}
        placeholder="youremail@example.com"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <PasswordText>Password:</PasswordText>
      <PasswordInput
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <CompanyText>Company / Student</CompanyText>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      <SubmitButton onClick={handleSignUp}>Register</SubmitButton>
    </SignupContainer>
  );
} // <--- SignUp() function ends here

export default SignUp;


// import React, {useState} from 'react'
// import {useNavigate} from 'react-router-dom';
// import {SignupContainer, AuthText, EmailInput, EmailText, PasswordInput, PasswordText, SubmitButton, OptionDrop, CompanyText}  from '../styles/AuthElements'
// import { SignUpUser} from '../firebaseConfig';

// function SignUp () {

//   const[email, setEmail] = useState("");
//   const[password, setPassword] = useState("");

//   const navigate = useNavigate();

//   return (
//     <>
//         <SignupContainer>
        
//                <AuthText>Sign Up</AuthText> 
               
//                 <EmailText>Email: </EmailText>
//                  <EmailInput
//                   value={email}
//                   placeholder="youremail@example.com"
//                   type="email"
//                   onChange={(e) => setEmail(e.target.value)} />
                

//                  <PasswordText>Password:</PasswordText>
//                  <PasswordInput
//                   value={password}
//                   type="password"
//                   onChange={(e) => setPassword(e.target.value)} />
                
//                 <CompanyText>Company / Student</CompanyText>


//                 <SubmitButton onClick={async () => {
//                   await SignUpUser(email, password);
//                   navigate('/login');
//                 }}>
//                   Register
//                 </SubmitButton>
            
//         </SignupContainer></>
//   )
// } // <--- SignUp() function ends here

// export default SignUp;