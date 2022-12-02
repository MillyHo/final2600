import React, { useEffect, useRef, useState } from "react";
import usePrevious from "./usePrevious";
import 'bootstrap';
import './Button.css';


export default function JokeCollection(props) {
  const [isEditing, setEditing] = useState(false);
  const [newJoke, setNewJoke] = useState("");
  const editFieldRef = useRef(null);
  const editButtonRef = useRef(null);
  const wasEditing = usePrevious(isEditing);


  function handleChange(e) {
    setNewJoke(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newJoke);
    setNewJoke("");
    setEditing(false);
  }
  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label
          className="joke-label"
          htmlFor={props.id}
        >
          Edit your Dad Joke
        </label>
        <input
          id={props.id}
          className="joke-text"
          type="text"
          value={newJoke}
          onChange={handleChange}
          ref={editFieldRef}
          placeholder={props.joke}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn joke-cancel"
          onClick={() => setEditing(false)}
        >
          Cancel
          <span className="visually-hidden">renaming {props.joke}</span>
        </button>
        <button type="submit" className="btn btn__primary joke-edit">
          Save
          <span className="visually-hidden">new name for {props.joke}</span>
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
      <label className= "joke-label"
               htmlFor={props.id} style={{fontSize: 25}}>
          {props.name}
        </label>
        <br/>
        <input
          id={props.id}
          className="heart"
          type="checkbox"
          defaultChecked={props.completed} 
         
          onChange={() => props.toggleFavorite(props.id)}
        />  
      
        
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn"
          onClick={() => setEditing(true)}
          ref={editButtonRef}
        >
          Edit <span className="visually-hidden">{props.joke}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete <span className="visually-hidden">{props.joke}</span>
        </button>
        
      </div>
    </div>
  );

  useEffect(() => {
    if (!wasEditing && isEditing) {
      editFieldRef.current.focus();
    }
    if (wasEditing && !isEditing) {
      editButtonRef.current.focus();
    }
  }, [wasEditing, isEditing]);

  return (
    <div className="card w-75" style={{marginTop:"1rem"}}>
  <div className="card-body">
  <li className="dadJokeList" Style={{listStyleType: "none"}}>{isEditing ? editingTemplate : viewTemplate}</li>
  </div>
  </div>
  )}
