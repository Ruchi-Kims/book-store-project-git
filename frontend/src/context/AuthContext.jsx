import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext,useContext, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { useEffect } from "react";


const AuthContext = createContext();
export const useAuth = () =>{
    return useContext(AuthContext)
}

const googleProvider = new GoogleAuthProvider();

//authProvider
export const AuthProvide = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // register a user
    const registerUser = async(email,password) =>{
        return await createUserWithEmailAndPassword(auth,email,password)
    }

    // Login a user
    const loginUser = async(email,password) =>{
        return await signInWithEmailAndPassword(auth,email,password)
    }

    //sign up with google
    const signInWithGoogle = async () =>{
        return await signInWithPopup(auth, googleProvider )
    }

    // logout the user
    const logout = async () => {
        return signOut(auth)
    }

    // manager user
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (user) =>{
            setCurrentUser(user);
            setLoading(false);

            if (user){
                const {email,displayName,photoURL} = user;
                const useData = {
                    email,username : displayName, photo: photoURL
                }
            }
        })

        return () => unsubscribe();
    }, [])


    const value = {
        currentUser,
        currentUser,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout
    }
    return (
        <AuthContext.Provider value={value}>
                {children}
        </AuthContext.Provider>
    )
}