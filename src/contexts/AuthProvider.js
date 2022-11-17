import React, { createContext } from 'react';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../firebase/firebase.config'

export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({children}) => {

 // Creating a new user 
const createUser = (email,password) =>{
   return createUserWithEmailAndPassword (auth, email, password)
}

// Signing in a user
const signIn = (email, password) =>{
    signInWithEmailAndPassword(auth, email, password)
}



const authInfo = {
    createUser,
    signIn,


}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;