import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./Firebase";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //!login with usercredential
  const history = useHistory()
  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //!redirect to homepage
        history.push('/')
      })
      .catch((e) => alert(e.message));
  };

  //!register a user
  const register = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //!user creted and logged in redirect to home
        console.log(auth);
        history.push('/')
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login_div">
      <form className="form_login" action="submit">
        <h2>username</h2>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name=""
          id=""
        />
        <h2>password</h2>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name=""
          id=""
        />
        <button onClick={(event) => login(event)} className="login_btn">
          Login
        </button>
        <h4>Or</h4>
        <button onClick={register} className="signup_btn">
          sign-up
        </button>
      </form>
    </div>
  );
}

export default Login;
