import React from "react";
import Banner from "./Banner";

const ShowPlayers = ({ players, handleClick }) => {
  const { id, title, description, customer, priority, status, createdAt } =
    players;
  return (
    <div className="space-y-4 m-2">
      <div
        onClick={() => handleClick(players)}
        className="card space-y-3 p-5 shadow-2xl h-full"
      >
        <div className="flex justify-between">
          <span className="font-bold">{title}</span>
          <span
            className={`badge ${
              status == "Open" ? "bg-[#B9F8CF]" : "bg-[#F8F3B9]"
            }`}
          >
            {status}
          </span>
        </div>
        <p>{description}</p>
        <div className="flex justify-between">
          <div className="space-x-3">
            <span>{id}</span>
            <span
              className={` font-bold ${
                priority == "High" ? "text-red-500" : "text-[#e9ac12]"
              }`}
            >
              {priority}
            </span>
          </div>
          <div className="space-x-3 flex items-center">
            <span>{customer}</span>
            <span className="flex items-center">
              <img className="w-5 h-4" src={"/calendar.svg"} alt="" />{" "}
              {createdAt}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowPlayers;
