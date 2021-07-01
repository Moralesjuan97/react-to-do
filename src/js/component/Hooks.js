import React, { useState } from "react";

const Hooks = () => {
  const [tasks, setTasks] = useState([]);
  const [newTasks, setNewTask] = useState("");

  const handleAddTask = (event) => {
    if (event.key == "Enter" && newTasks.length > 2) {
      setTasks([...tasks, newTasks]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (indexTask) => {
    let filtertask = tasks.filter(
      (task, indexCurrentTask) => indexCurrentTask !== indexTask
    );

    setTasks(filtertask);
  };

  return (
    <div className="text-center mt-5">
      <h1>To-Do List</h1>

      <input
        value={newTasks}
        placeholder="New to-do"
        onChange={(event) => setNewTask(event.target.value)}
        onKeyPress={(event) => handleAddTask(event)}
      />
      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              {task}
              {
                <button type="button" onClick={() => handleDeleteTask(index)}>
                  X
                </button>
              }
            </li>
          );
        })}
      </ul>
      {tasks.length > 0 ? (
        <footer> Por realizar : {tasks.length}</footer>
      ) : (
        <footer>No hay tareas :(</footer>
      )}
    </div>
  );
};

export default Hooks;
