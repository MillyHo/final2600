import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "bootstrap";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [addMember, setAddMember] = useState("");

  // const client = axios.create({
  //   baseURL: "http://localhost:5000/api/members",
  // });

  const handleSubmit = (e) => {
    console.log(userName, email, password, confirmPassword);
    e.preventDefault();
    checkPw(password, confirmPassword);
  };

  function checkPw(password, confirmPassword) {
    if (password == confirmPassword) {
      addNewMember(userName, email, password);
    }
  }

  //const apiUrl = 'https://localhost:5000/api/members';
  function addNewMember(userName, email, password) {
    axios
      .post("http://localhost:5000/api/members", {
        userName: userName,
        email: email,
        password: password,
      })
      .then((res) => {
        setAddMember([res.data, ...addMember]);
      });
    setEmail("");
    setUserName("");
    setPassword("");
    setConfirmPassword("");
  }

  //   useEffect(()=>{
  //     const member = {userName: userName, email: email, password: password}
  //     axios.post(apiUrl, member)
  //     .then(response=>setAddMember(response.data.email));

  // },[]);

  function handleChange(e) {
    const { id, value } = e.target;

    if (id === "inputEmail") {
      setEmail(value);
    }

    if (id === "userName") {
      setUserName(value);
    }

    if (id === "inputPassword") {
      setPassword(value);
    }

    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  }

  useEffect(()=>{
    const data = localStorage.getItem('registerEmail');
    if(data) {
      setEmail(JSON.parse(data));
    }
},[]);

 useEffect(()=>{
   localStorage.setItem('registerEmail', JSON.stringify(email));
});

  return (
    <Fragment>
      <form style={{ margin: "1rem" }}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            aria-describedby="emailHelp"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="userName">
            User Name{" "}
          </label>
          <input
            className="form-control"
            type="text"
            id="userName"
            placeholder="User Name"
            value={userName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
        </div>

        <div className="confirm-password">
          <label className="form-label" htmlFor="confirmPassword">
            Confirm Password{" "}
          </label>
          <input
            className="form-control"
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ border: "1rem" }}
          onClick={handleSubmit}
        >
          Submit
        </button>

        <Link to="/login">
          <span className="btn btn-primary" style={{ marginLeft: "1rem" }}>
            {" "}
            Back
          </span>
        </Link>
      </form>
    </Fragment>
  );
}

export default Register;
