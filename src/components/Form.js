import React, { useState } from "react";
import 'bootstrap';

export default function Form(props) {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name !== "") {
      props.addTask(name);
      setName("");
    } else {
      alert("Please enter your Dad joke");
    }
  }

  function handleReset(e) {
    e.preventDefault();
    localStorage.clear("listOfTasks");
    props.clearTask();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <h2 className="label-wrapper">
        </h2>
        <textarea
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          placeholder="Enter your Dad joke here!"
          style={{ height: 100, width: 300 }}
          value={name}
          onChange={handleChange}
        ></textarea>
        <br />
      </div>
      <button type="submit" className="btn btn-outline-success" style={{marginRight: "1rem"}}> 
        Add to my collection
      </button>

      <button
        onClick={handleReset}
        type="button"
        className="btn btn-outline-dark"
      >
        Remove All{" "}
      </button>
    </form>
  );
}
