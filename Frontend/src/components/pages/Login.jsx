import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Context } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const [registrationNo, setRegistrationNo] = useState("");
  const [password, setPassword] = useState("");
  const { mode, isAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "http://localhost:4000/api/v1/user/login",
        { registrationNo, password },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setRegistrationNo("");
        setPassword("");
        navigateTo("/");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  if(isAuthenticated){
    return <Navigate to={'/'}/>
  }

  return (
    <article className={mode === "dark" ? "dark-bg" : "light-bg"}>
      <section className="auth-form">
        <form onSubmit={handleLogin}>
          <h1>LOGIN</h1>
          
          <div>
            <input
              type="number"
              placeholder="Registration No"
              value={registrationNo}
              onChange={(e) => setRegistrationNo(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p>
            Don't have any Account? <Link to={"/register"}>Register Now</Link>
          </p>

          <button className="submit-btn" type="submit">
            LOGIN
          </button>
        </form>
      </section>
    </article>
  );
};

export default Login;
