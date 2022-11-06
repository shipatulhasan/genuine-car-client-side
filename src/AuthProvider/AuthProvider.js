import React, { useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.init';
import { useEffect } from 'react';

export const AuthContext = createContext()


const AuthProvider = ({children}) => {

    const [user, setUser] = useState({})
    const auth = getAuth(app)
    const [isLoading, setIsLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()


    const signInWithGoogle = ()=>{
        setIsLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    // create user

    const createUSer = (email,pass)=>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth,email,pass)
    }

    const signInUser = (email,pass)=>{
       return signInWithEmailAndPassword(auth, email, pass)
    }

    const updateUserProfile = (profile)=>{
        return updateProfile(auth.currentUser,profile)
    }

    // reset pass
    const resetPass = (email)=>{
        return sendPasswordResetEmail(auth, email)
    }

    const logOut = ()=>{
        setIsLoading(true)
        localStorage.removeItem('token')
      return  signOut(auth)
      
    }

    const authInfo = {
        user, 
        signInWithGoogle,
        createUSer,
        logOut,
        updateUserProfile,
        signInUser,
        resetPass,
        isLoading
    }

    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth, (currentUser) =>{

            setUser(currentUser)
            setIsLoading(false)

        })

        return ()=>{
            unsubcribe()
        }
    }, [auth])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;