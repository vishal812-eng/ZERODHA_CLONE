import { useState, useEffect } from "react"
import axios from "axios"

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null)

  useEffect(() => {
    axios.get("https://zerodha-clone-4hp1.onrender.com/verify", {
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
        window.location.href = "https://zerodha-clone-frontend-dsp7.onrender.com/login"
        return null
    }

  return children
   
}

export default PrivateRoute