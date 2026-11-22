import React from "react";

export default function AddTask({ tasklist, setTasklist, task, setTask }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.id) {
      const date = new Date();
        const updatedTasklist = tasklist.map((todo) => (
          todo.id === task.id ? {...todo, name: task.name, 
            time:  `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`} : todo
        ))
        setTasklist(updatedTasklist);
        setTask({})
    } else {
      const date = new Date();
      const newTask = {
        id:   date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };

      setTasklist([...tasklist, newTask]);
      e.target.reset();
      setTask({})
    }
  };

  return (
    <div className="addTask">
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="task"
            value={task.name || ""}
            onChange={e => setTask({...task, name: e.target.value})}
            autoComplete="off"
            placeholder="add_task"
          />
          <button type="submit">{task.id ? "Update" : "Add"}</button>
        </form>
      </section>
    </div>
  );
}
