import Task from "./Task";

function TaskDisplay({ taskList }) {
  return (
    <>
      <div className="m-10 p-5 flex grow bg-slate-900 rounded-2xl">
        {taskList.map((task) => {
          return <Task task={task} />;
        })}
      </div>
    </>
  );
}

export default TaskDisplay;
