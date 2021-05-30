import { useEffect, useState } from "react";
import api from "../../api";
import history from "../../history";

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      api.defaults.header.Authorization = `Bearer ${JSON.parse(token)}`
      setAuthenticated(true)

      setLoading(false)
    }
  }, [])

  async function handleLogin() {
    const { data: { token } } = await api.post('/authenticate')

    localStorage.setItem('token', JSON.stringify(token))
    api.defaults.header.Authorization = `Bearer ${token}`
    setAuthenticated(true)
    history.push('/users')
  }

  function handleLogout() {
    setAuthenticated(false)
    localStorage.removeItem('token')
    api.defaults.header.Authorization = undefined
    history.push('/login')
  }

  return { authenticated, handleLogin, handleLogout, loading }
}