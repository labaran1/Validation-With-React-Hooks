import React, { useState } from "react";
import "./App.css";

function App() {
  const [log, setLog] = useState(false);

  const changelog = () => {
    setLog(true);
  };
  const toLogin = () => {
    setLog(false);
  };
  if (!log) {
    return (
      <div className="login">
        <form method="Post">
          <h3 className="OauthTitle">Log In with</h3>
          <div className="OauthBtn">
            <h4 className="OauthLink">
              <i class="fab fa-google"></i> Google
            </h4>
            <h4 className="OauthLink">
              <i class="fab fa-facebook"></i> Facebook
            </h4>
          </div>
          <p>or</p>

          <div className="formGroup">
            <label htmlFor="Email">Email</label>
            <input type="text" name="Email" placeholder="Enter your email" />
          </div>
          <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className=" formGroup btn">
            Login
          </button>
          <p className="fromLoginToSignUp">
            Don't have an account?{" "}
            <a href="#" onClick={changelog}>
              Sign up
            </a>
          </p>
        </form>
      </div>
    );
  }
  // Register
  return (
    <div className="login">
      <form method="Post">
        <h3 className="OauthTitle">Sign up with</h3>
        <div className="OauthBtn">
          <h4 className="OauthLink">
            <i class="fab fa-google"></i> Google
          </h4>
          <h4 className="OauthLink">
            <i class="fab fa-facebook"></i> Facebook
          </h4>
        </div>
        <p>or</p>
        <div className="formGroup">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your Full Name"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="Email">Email</label>
          <input
            type="text"
            name="Email"
            id="Email"
            placeholder="Enter your email"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            name="password2"
            id="password2"
            placeholder="Confirm password"
          />
        </div>
        <button type="submit" className=" formGroup btn">
          Sign Up
        </button>
        <p className="fromLoginToSignUp">
          Already have an account?{" "}
          <a href="#" onClick={toLogin}>
            Login
          </a>
        </p>
      </form>
    </div>
  );
}

export default App;
