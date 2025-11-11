import React from "react";

const TaskStatus = ({ progressTask, completeHandler }) => {
  const { title } = progressTask;
  return (
    <div className="border-2">
      <p>{title}</p>
      <button onClick={() => completeHandler(progressTask)} className="btn">
        Completed
      </button>
    </div>
  );
};

export default TaskStatus;
