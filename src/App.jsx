import { useState } from "react";
import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";
import "./App.css";

const STARTING_TASKS = [
  { id: 1, title: "Create a new Folder", completed: true },
  { id: 2, title: "Start Frontend Development", completed: true },
  { id: 3, title: "Watch new episode", completed: true },
  { id: 4, title: "Sleep Early", completed: false },
];

function App() {
  const [tasks, setTasks] = useState(STARTING_TASKS);

  function addTask(title) {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    setTasks([...tasks, newTask]);

  }return (
    <main className="TaskManager">
      <h1>Task Manager</h1>
      <p className="count">
        {tasks.length} tasks in the catalogue
      </p>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} />
    </main>
  );
}

export default App;