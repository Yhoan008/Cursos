import Tasklist from "./Tasklist";
import Taskform from "./Taskform";
import { tasks } from "./task";
import { useState, useEffect } from "react";

function App() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    setTask(tasks);
  }, []);

  function changeState(newTask, description) {
    setTask([
      ...task,
      {
        id: task.length,
        title: newTask,
        descripcion: description,
      },
    ]);
  }

  function deleteTask(id) {
    const filtrate = task.filter((e) => id != e.id);
    setTask(task.filter((e) => id != e.id));
  }

  if (task.length === 0) {
    return (
      <div>
        <Taskform changeState={changeState} />
        <h2>Tareas Sin asignar</h2>
      </div>
    );
  }

  return (
    <div>
      <Taskform changeState={changeState} />
      <Tasklist task={task} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
