import React from "react";

function TaskDisplay() {
  return (
    <>
      <div className="m-10 p-10 bg-slate-900 rounded-2xl flex justify-center items-center">
        {/* <h2 className="text-white text-center text-2xl font-semibold pb-10">
            TaskList
          </h2> */}
        <div className="w-9/12 h-24 text-center text-black text-lg font-semibold flex flex-row justify-center items-center bg-white rounded-xl shadow-lg">
          <p className="basis-3/4">lorem*2</p>
          <div className="">
            <button className="w-10 h-10 m-5 text-3xl text-white font-bold rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50">
              <span class="material-symbols-outlined">check</span>
            </button>
            <button className="w-10 h-10 m-5 text-3xl text-white font-bold rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50">
              <span class="material-symbols-outlined">remove</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskDisplay;
