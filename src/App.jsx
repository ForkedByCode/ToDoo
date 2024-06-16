import "./App.css";
import TaskDisplay from "./components/TaskDisplay";
import TaskInput from "./components/TaskInput";

function App() {
  return (
    <>
      <main className="">
        <TaskInput />
        <TaskDisplay />
      </main>
    </>
  );
}

export default App;
