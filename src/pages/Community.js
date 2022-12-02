import React, { useRef, useEffect, useState } from "react";
import Form from "../components/Form";
import FilterButton from "../components/FilterButton";
import { nanoid } from "nanoid";
import usePrevious from "../components/usePrevious";
import "bootstrap";
import "./Community.css";
import JokeCollection from "../components/JokeCollection";

const FILTER_MAP = {
  All: () => true,
  Favorite: (task) => task.favorite,
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  function toggleFavorite(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, favorite: !task.favorite };
      }
      return task;
    });
    setTasks(updatedTasks);
    console.log(tasks[0]);
    console.log(tasks[1]);
    console.log(tasks[2]);
  }

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <JokeCollection
        id={task.id}
        name={task.name}
        favorite={task.favorite}
        key={task.id}
        toggleFavorite={toggleFavorite}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  function addTask(name) {
    //alert(name);
    const newTask = { id: `joke-${nanoid()}`, name, favorite: false };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  function clearTask() {
    setTasks([]);
  }

  useEffect(() => {
    const data = localStorage.getItem("listOfJokes");
    if (data) {
      setTasks(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("listOfJokes", JSON.stringify(tasks));
  });

  return (
    <div className="community" style={{ margin: "1rem" }}>
      <h1>Community</h1>
      <h3>Create your Dad joke collection!</h3>
      <Form addTask={addTask} clearTask={clearTask} />

      <div className="filters btn-group stack-exception">{filterList}</div>

      <ul
        //role="list"
        className="joke-ul stack-large stack-exception"
        aria-labelledby="list-heading"
        style={{ listStyle: "none" }}
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
