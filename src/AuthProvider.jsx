import { createContext, useEffect, useState } from "react";
import { auth } from "./Firebase/firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const UserLogIn = (email, password) => {
        setLoading(true)

        return signInWithEmailAndPassword(auth, email, password);

    }

    const updateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser, updateData);
    }

    const userLogOut = () => {
        return signOut(auth);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("Logged in User", currentUser)
            setUser(currentUser);
            setLoading(false)
        })

        return () => {
            unSubscribe();
        }
    }, [])


    const authInfo = {

        user,
        setUser,
        loading,
        setLoading,
        createUser,
        updateUserProfile,
        userLogOut,
        UserLogIn

    }
    return (
        <AuthContext.Provider value={authInfo}>

            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;