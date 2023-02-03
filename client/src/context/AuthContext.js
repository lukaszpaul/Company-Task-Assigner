import {createContext, useContext, useState, useEffect} from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
import {auth} from '../firebaseConfig'

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState({});

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    },[])



    return (
        <UserContext.Provider value={{ createUser }}>
            {children}
        </UserContext.Provider>
    )
} // <--- AuthContextProvider() function ends here

export const UserAuth = () => {
    return useContext(UserContext)
}