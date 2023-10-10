import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../Redux/action";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  document.title = "Login";

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
    navigate("/");
  };



  return (
    <div className="loginform">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="Email"
          placeholder="Email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <input type="submit" value="Sign In" />
        <p>
          <Link to="/signup"> Create account</Link>
        </p>
      </form>
    </div>
  );
};
