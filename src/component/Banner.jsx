import React from "react";
import vector1 from "../assets/vector1.png";
import vector2 from "../assets/vector2.png";
const Banner = ({ progressCount, completedCount }) => {
  return (
    <div className="flex justify-between items-center w-11/12 mx-auto p-5 gap-5">
      <div className="rounded-lg bg-linear-to-br from-[rgba(99,46,227,1)] to-[rgba(159,98,242,1)] flex items-center">
        <div>
          <img src={vector1} alt="" />
        </div>
        <div className="flex text-center flex-col items-center text-white  font-bold">
          <span className="bold">In Progress</span>
          {progressCount.length}
        </div>
        <div>
          <img src={vector2} alt="" />
        </div>
      </div>
      <div className="rounded-lg bg-linear-to-r from-[rgba(84,207,103.68,1)] to-[rgba(0,130,122.2,1)] flex items-center">
        <div>
          <img src={vector1} alt="" />
        </div>
        <div className="flex flex-col items-center text-white font-bold">
          <span className="bold">Resolved</span>
          {completedCount.length}
        </div>
        <div>
          <img src={vector2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
