import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../utils/firebase"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth"

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Register with email & password
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // Login with email & password
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // Google sign-in
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
  }

  // Logout
  const logout = () => signOut(auth)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  const value = {
    user: currentUser,
    loading,
    register,
    login,
    googleSignIn,
    logout,
  }

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}
