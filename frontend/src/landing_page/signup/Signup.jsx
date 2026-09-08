import { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

const Signup = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("button clicked");
  console.log({ username, email, password });

  try {
    const response = await axios.post(
      "http://localhost:3002/signup",
      { username, email, password },
      { withCredentials: true }
    );

    if (response.data.success) {
      window.location.href = "http://localhost:3000";
    }

  } catch (error) {
    console.log("Signup Error:", error);
    console.log("Backend Response:", error.response?.data);

    alert(
      error.response?.data?.message || "Something went wrong"
    );
  }
};

  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center",
      height: "100vh"
    }}>
      <div style={{ width: "400px" }}>
        
        <h3 className="mb-1">Signup now</h3>
        <p className="text-muted mb-4" style={{ fontSize: "14px" }}>
          Or track your existing application
        </p>

        {/* Username */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>  

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
          Signup
        </button>

        {/* Login Link */}
        <p className="text-center" style={{ fontSize: "14px" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#387ED1" }}>Login</Link>
        </p>

        {/* Terms */}
        <p className="text-muted text-center" style={{ fontSize: "12px" }}>
          By proceeding, you agree to the{" "}
          <a href="#" style={{ color: "#387ED1" }}>terms</a> &{" "}
          <a href="#" style={{ color: "#387ED1" }}>privacy policy</a>
        </p>

      </div>
    </div>
  )
}

export default Signup