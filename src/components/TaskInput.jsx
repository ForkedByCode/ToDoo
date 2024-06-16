import React from "react";

function TaskInput() {
  return (
    <>
      <div className="m-10 p-5 bg-slate-900 rounded-2xl flex justify-around items-center">
        <h1 className="text-center text-5xl text-white font-bold">
          To-Do List
        </h1>
        <div className="">
          <fieldset className="border-2 border-indigo-500 rounded-xl">
            <legend className="text-white p-1 ml-2.5">Add a task</legend>
            <div className="flex justify-around items-center">
              <input type="text" className="w-96 h-10 m-2 px-5 rounded-full" />
              <button className="w-10 h-10 m-2 bottom-px text-3xl text-white font-bold rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50">
                <span class="material-symbols-outlined">add_task</span>
              </button>
            </div>
          </fieldset>
        </div>
      </div>
    </>
  );
}

export default TaskInput;
