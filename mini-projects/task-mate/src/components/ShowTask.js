import React from "react";

const ShowTask = ({ tasklist, setTasklist, task, setTask }) => {
  const delTask = (id) => {
    setTasklist(tasklist.filter((task) => task.id !== id));
  };
  const handleEdit = (id) => {
    const selectedTask = tasklist.find((todo) => todo.id === id);
    setTask(selectedTask);
  };
  return (
    <section className="showTask">
      <div>
        <div>
          <span className="title">Todo</span>
          <span className="count">0</span>
        </div>
        <button className="clearAll" onClick={() => setTasklist([])}>
          Clear all
        </button>
      </div>
      <ul>
        {tasklist.map((task) => (
          <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <i
              className="bi bi-pencil-square"
              onClick={() => handleEdit(task.id)}
            ></i>
            <i className="bi bi-trash" onClick={() => delTask(task.id)}></i>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShowTask;
