import Task from "./Task";

function TaskDisplay({ taskList, deleteTask }) {
  return (
    <>
      <div className="m-10 p-5 flex flex-wrap bg-slate-900 rounded-2xl">
        {taskList?.map((task, index) => {
          return (
            <Task
              key={index}
              task={task}
              index={index}
              deleteTask={deleteTask}
            />
          );
        })}
      </div>
    </>
  );
}

export default TaskDisplay;
