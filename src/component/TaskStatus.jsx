import React from "react";

const TaskStatus = ({ progressTask, completeHandler }) => {
  const { title } = progressTask;
  return (
    <div className="card p-5 shadow-2xl space-y-4">
      <p>{title}</p>
      <button
        onClick={() => completeHandler(progressTask)}
        className="btn bg-[#02A53B] text-white w-full"
      >
        Completed
      </button>
    </div>
  );
};

export default TaskStatus;
