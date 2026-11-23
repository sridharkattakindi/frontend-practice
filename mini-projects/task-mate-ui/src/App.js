import { useState } from "react";
import "./App.css";
import ShowTask from "./components/ShowTask";
import AddTask from "./components/AddTask";
import Header from "./components/header";
import Logo from "./components/logo.svg";

function App() {
  const [tasklist, setTasklist] = useState([]);
  const [task, setTask] = useState({});
  const count = tasklist.length;

  return (
    <div className="App">
      <div className="container">
        <Header Logo={Logo} />

        <p>Todos: {count}</p>
        <button>Clear all</button>
        <div></div>
      </div>
      <ShowTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
      <AddTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
    </div>
  );
}

export default App;
