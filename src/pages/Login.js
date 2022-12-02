import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email);
  console.log(password);

  function validation() {
    if (email.length > 0 && password.length > 0) {
      return true;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="Login" style={{ margin: "1rem" }}>
      <h3>To use the community, please login first!</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check"></div>

        <Link to="/community" onClick={validation}>
          <span className="btn btn-primary" style={{ marginLeft: "1rem" }}>
            Login
          </span>
        </Link>
        <Link to="/register">
          <span className="btn btn-primary" style={{ marginLeft: "1rem" }}>
            Register
          </span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
