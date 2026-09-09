import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("button clicked")
    try {
  const response = await axios.post(
    "https://zerodha-clone-4hp1.onrender.com/login",
    { email, password },
    { withCredentials: true }
  );

  console.log("LOGIN DATA:", response.data);

  if (response.data.success) {
    window.location.href = "https://zerodha-clone-1-ylax.onrender.com";
  } else {
    setError(response.data.message);
    alert(response.data.message);
  }

} catch (err) {
  console.log("Login Error:", err);
  setError("Something went wrong");
}
  }

  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center",
      height: "100vh"
    }}>
      <div style={{ width: "400px" }}>  

        <h3 className="mb-1">Login</h3>
        <p className="text-muted mb-4" style={{ fontSize: "14px" }}>
          Welcome back!
        </p>

        {/* Error Message */}
        {error && (
          <div className="alert alert-danger" style={{ fontSize: "14px" }}>
            {error}
          </div>
        )}

        {/* Email */}
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        {/* Submit Button */}
        <button
          className="btn w-100 text-white mb-3"
          style={{ backgroundColor: "#387ED1", padding: "12px" }}
          onClick={handleSubmit}
        >
          Login
        </button>

        {/* Signup Link */}
        <p className="text-center" style={{ fontSize: "14px" }}>
          Don't have an account?{" "}
          <Link to="/signup" style={{ color: "#387ED1" }}>Signup</Link>
        </p>

      </div>
    </div>
  )
}

export default Login