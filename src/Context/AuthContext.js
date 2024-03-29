import { createContext , useContext , useEffect , useState } from "react";
import {auth, getAuth} from '../FireBase'
import {signInWithEmailAndPassword ,createUserWithEmailAndPassword ,signOut ,onAuthStateChanged} from 'firebase/auth'



const AuthContext = createContext()

export function AuthContextProvider({children}){

    const [user,setUser] = useState({})

    function signUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
    }
    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }
    function logOut() {
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unSubscribe();
        }
    })
    return(
  
        <AuthContext.Provider value={{user,logIn,logOut,signUp}}>  {children} </AuthContext.Provider>
    )
}

export function UserAuth() {
    return(
        useContext(AuthContext)
    )
}