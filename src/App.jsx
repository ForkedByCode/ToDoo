import { useState } from "react";
import TaskDisplay from "./components/TaskDisplay";
import TaskInput from "./components/TaskInput";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const writeTask = (e) => {
    setInputValue(e.target.value);
  };

  const addTasks = () => {
    if (inputValue != "") {
      setTasks((prevTasks) => {
        return [...prevTasks, inputValue];
      });
      setInputValue("");
    }
  };

  function deleteTask(taskIndex) {
    setTasks((prevTasks) => {
      return prevTasks.filter((_, prevTasksIndex) => {
        return prevTasksIndex != taskIndex;
      });
    });
  }

  return (
    <>
      <main className="">
        <TaskInput
          inputValue={inputValue}
          writeTask={writeTask}
          addTasks={addTasks}
        />
        <TaskDisplay taskList={tasks} deleteTask={deleteTask} />
      </main>
    </>
  );
}

export default App;
