import { useState, useEffect } from "react"
import axios from "axios"

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null)

  useEffect(() => {
    axios.get("http://localhost:3002/verify", {
      withCredentials: true
    })
    .then(res => {
      if(res.data.success) {
        setIsAuthenticated(true)
      } else {
        setIsAuthenticated(false)
      }
    })
    .catch(() => setIsAuthenticated(false))
  }, [])


  if(isAuthenticated === null) {
    return <div>Loading...</div>
  }

    if(!isAuthenticated) {
        window.location.href = "http://localhost:5173/login"
        return null
    }

  return children
   
}

export default PrivateRoute