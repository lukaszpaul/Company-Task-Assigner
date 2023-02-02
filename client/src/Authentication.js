import React, {useState, useEffect} from 'react';


const [user, setUser] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [emailError, setEmailError] = useState();
const [passwordError, setPasswordError] = useState();
const [hasAccount, setHasAccount] = useState(false);

// Clear Inputs when page loads
const clearInputs = () => {
  setEmail('');
  setPassword('');
}

// Clear Errors when page loads
const clearErrors = () => {
  setEmailError('');
  setPasswordError('');
}

// Handle Sign Ins / Logins
const handleLogin = () => {
  clearErrors();
  fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(err => {
      switch(err.code) {
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPassword(err.message);
          break;
      } // <--- switch() case ends here ends here
    }); // <--- handleLogin() function ends here
}; // <--- Login() function ends here

// Handle Sign Ups / Registrations
const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        } // <--- switch() case ends here ends here
      });  // <--- catch() ends here
  }; // <--- handleSignUp() function ends here

// Handling Sign Outs
const handleLogout = () => {
  fire.auth.signOut();
};

// Check if User exists (when signing up and logging in)
const authListener = () => {
  fire.auth().onAuthStateChanged(user => {
    if(user) {
        clearInputs();
        setUser(user);
    } 
    else {
        setUser('');
    }
  }) // <--- onAuthStateChanged() ends here
} // <--- authListener() function ends here

useEffect(() => {
  authListener();
}, [])

