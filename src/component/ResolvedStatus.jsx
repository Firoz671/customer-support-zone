import React from "react";

const ResolvedStatus = ({ completedTask }) => {
  return (
    <div>
      <p>hello {completedTask.title}</p>
    </div>
  );
};

export default ResolvedStatus;
