import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    setLoading(true);
    try {
      const response = await axios.post(
        `http://localhost:5000/api/auth/login`,
        data
      );
      setLoading(false);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.userId);
      navigate("/home");
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
      setLoading(false);
      console.log(error.response.data.message);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center p-5">
      <div className="w-full md:w-10/12 flex flex-col md:flex-row h-full md:h-11/12 shadow-md ">
        <div className="w-full md:w-1/2 bg-blue-600 p-4 text-white flex justify-between flex-col rounded  ">
          <div className="text-sm md:text-lg font-bold">
            <i class="fa-solid fa-car-side"></i> Milehire
          </div>
          <div className="mt-5 md:text-xl font-bold">
            Effortless Driver Hiring – Your Way, Your Time!
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-white p-4 px-4 md:px-10 flex flex-col justify-center">
          <div className="form">
            <div className="text-center mb-3 font-bold text-xl">
              Login to continue
            </div>
            {error ? (
              <div className="text-red-500 text-center mb-4">{error}</div>
            ) : (
              ""
            )}

            <form onSubmit={handleSubmit}>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="submit"
                className="bg-blue-600 p-2 text-white rounded-md w-full"
              >
                {loading ? (
                  <div className="loader-container">
                    <div className="button-loader"></div>
                  </div>
                ) : (
                  "Login"
                )}
              </button>
            </form>

            <div className="text-center mt-5">
              New User?
              <NavLink to="/signup" className=" text-blue-600">
                {" "}
                Create New Account &rarr;
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
