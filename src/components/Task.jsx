function Task({ task, deleteTask, index }) {
  return (
    <>
      <div className="max-w-md min-w-fit h-24 m-5 p-2 text-center text-black text-lg font-semibold flex justify-center items-center bg-white rounded-xl shadow-lg">
        <p className="basis-3/4">{task}</p>
        <div className="">
          <button className="w-10 h-10 m-5 text-3xl text-white font-bold rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50">
            <span className="material-symbols-outlined">check</span>
          </button>
          <button
            className="w-10 h-10 m-5 text-3xl text-white font-bold rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50"
            onClick={() => {
              deleteTask(index);
            }}
          >
            <span className="material-symbols-outlined">remove</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Task;
