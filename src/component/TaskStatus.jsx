import React from "react";

const TaskStatus = ({ progressTask }) => {
  const { title } = progressTask;
  console.log(progressTask);
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

export default TaskStatus;
