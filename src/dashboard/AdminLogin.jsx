import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../style/AdminLogin.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("All fields are required");
      toast.error("All fields are required");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/api/admin/login", {
        email,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        toast.success("Login successful!");
        navigate("/admindashboard"); 
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Server error";
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };

  return (
    <>
    
    
      <div className="login-container3">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Admin Login</h2>
          {error && <p className="error">{error}</p>}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
     
    </>
  );
};

export default Login;
