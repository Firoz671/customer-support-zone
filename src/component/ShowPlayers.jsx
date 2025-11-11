import React from "react";
import Banner from "./Banner";

const ShowPlayers = ({ players, handleClick }) => {
  const { id, title, description, customer, priority, status, createdAt } =
    players;
  return (
    <div className="">
      <div
        onClick={() => handleClick(players)}
        className="card p-4 border-2 h-full"
      >
        <div className="flex justify-between">
          <span>{title}</span>
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
          <div>
            <span>{id}</span>
            <span
              className={`${
                priority == "High" ? "text-red-500" : "text-[#FECE50]"
              }`}
            >
              {priority}
            </span>
          </div>
          <div>
            <span>{customer}</span>
            <span>{createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowPlayers;
