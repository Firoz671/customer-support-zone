import React from "react";

const ResolvedStatus = ({ completedTask }) => {
  return (
    <div className="bg-[#E0E7FF] p-5 rounded-sm">
      <p className="font-bold">{completedTask.title}</p>
    </div>
  );
};

export default ResolvedStatus;
