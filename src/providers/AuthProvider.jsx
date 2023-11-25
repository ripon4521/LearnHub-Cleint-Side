import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setloading]=useState(true);
    const provider = new GoogleAuthProvider();


    const googleLogin = ()=>{
        setloading(true)
        return signInWithPopup(auth ,provider)
     }
     const logout = ()=>{
        setloading(true)
        return signOut(auth)
    }

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentuser =>{
        setUser(currentuser)
        console.log('currentUser' , auth);
       setloading(false)
    })
    return()=>{
        return unsubscribe()
    } 
},[])
console.log(user);

const userInfo = {
    user,
    loading,
    googleLogin,
    logout
}


    return (
        <AuthContext.Provider value={userInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;