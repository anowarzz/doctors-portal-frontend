import React, { createContext, useEffect, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config'

export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({children}) => {

const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)

 // Creating a new user 
const createUser = (email,password) =>{
    setLoading(true)
   return createUserWithEmailAndPassword (auth, email, password)
}

// Signing in a user
const signIn = (email, password) =>{
    setLoading(true)
   return signInWithEmailAndPassword(auth, email, password)
}

// Updating user info
const updateUser = (userInfo) => {
    return updateProfile(user, userInfo)
}


// Sign Out a user
const logOut = () => {
    setLoading(true)
    return signOut(auth);
}



// User state observer
useEffect( () => {
   const unSubscribe = onAuthStateChanged(auth, currentUser => {
    console.log('Observing user state');
      setUser(currentUser)
      setLoading(false)
    })
    return () => unSubscribe();
}, [])



// Context Values
const authInfo = {
    createUser,
    signIn,
    user, 
    setUser,
    logOut,
    updateUser,
    loading,
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;