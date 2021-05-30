import { createContext, useEffect, useState } from "react";
import useAuth from "./hooks/useAuth";

const Context = createContext()

function AuthProvider({ children }) {
  const { authenticated, handleLogin, handleLogout, loading } = useAuth()

  return (
    <Context.Provider value={{ authenticated, handleLogin, handleLogout, loading }}> 
      {children}
    </Context.Provider>
  )
}

export { Context, AuthProvider }