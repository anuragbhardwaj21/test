import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signupUser } from "../Redux/action";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const Signup = () => {
  document.title = "Sign Up";

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [name, setName] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser(name, email, password));
    setName("");
    setemail("");
    setpassword("");
    navigate("/login");
  };

  return (
    <div className="signupform">
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
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
        <input type="submit" value="Create Account" />
        <p>
          <Link to="/login">Already having account?</Link>
        </p>
      </form>
    </div>
  );
};
