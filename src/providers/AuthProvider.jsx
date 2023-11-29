import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { axiosPublic } from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setloading]=useState(true);
    const provider = new GoogleAuthProvider();

    const createUser =(email,password)=>{
        setloading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const sighnIn = (email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogin = ()=>{
        setloading(true)
        return signInWithPopup(auth ,provider)
     }
     const logout = ()=>{
        setloading(true)
        return signOut(auth)
    }
    const updateuserProfile = (name , photo)=>{
        setloading(true)
     return   updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentuser =>{
        setUser(currentuser)
        if (currentuser) {
            // Get token and store cleint
            const userInfo = {email : currentuser.email}
            axiosPublic.post('/jwt', userInfo)
            .then(res=>{
                if (res.data.token) {
                    localStorage.setItem('access-token', res.data.token);
                }
            })
        }else{
            // Remove Token
            localStorage.removeItem('access-token')
        }
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
    logout,
    createUser,
    sighnIn,
    updateuserProfile
}


    return (
        <AuthContext.Provider value={userInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;