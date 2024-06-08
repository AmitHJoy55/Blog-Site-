import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Context } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [registrationNo, setRegistrationNo] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("");

  const changeAvatarHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setAvatarPreview(reader.result);
      setAvatar(file);
    };
  };

  const { mode, isAuthenticated } = useContext(Context);

  const navigateTo = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("registrationNo", registrationNo);
    formData.append("password", password);
    formData.append("role", role);
    formData.append("avatar", avatar);

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/user/register",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setName("");
      setEmail("");
      setPassword("");
      setRegistrationNo("");
      setRole("");
      setAvatar("");
      setAvatarPreview("");
      toast.success(data.message);
      navigateTo("/");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred");
      }
      console.log(error);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <article className={mode === "dark" ? "dark-bg" : "light-bg"}>
      <section className="auth-form">
        <form onSubmit={handleRegister}>
          <h1>REGISTER</h1>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">SELECT ROLE</option>
            <option value="Student">STUDENT</option>
            <option value="Admin">ADMIN</option>
          </select>
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
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
          
          <div className="avatar-container">
            <div className="avatar">
              <img
                src={avatarPreview ? `${avatarPreview}` : ""}
                alt="avatar"
              />
            </div>
            <input
              type="file"
              onChange={changeAvatarHandler}
              className="avatar_input_tag"
            />
          </div>
          <p>
            Already Registered? <Link to={"/login"}>Login Now</Link>
          </p>
          <button className="submit-btn" type="submit">
            REGISTER
          </button>
        </form>
      </section>
    </article>
  );
};

export default Register;
