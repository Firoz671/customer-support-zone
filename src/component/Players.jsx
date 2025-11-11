import React, { use, useState } from "react";
import ShowPlayers from "./ShowPlayers";
import Banner from "./Banner";
import { toast } from "react-toastify";
import TaskStatus from "./TaskStatus";

const Players = ({ dataPromise }) => {
  const [progressCount, setProgressCount] = useState([]);

  const handleClick = (data) => {
    toast.info("clicked");
    const newData = [...progressCount, data];
    setProgressCount(newData);
  };
  const theData = use(dataPromise);
  return (
    <div>
      <Banner progressCount={progressCount} />
      <div className="w-11/12 mx-auto p-5 flex gap-5">
        <div className="w-[60%]">
          <div>
            <h1>Customer Ticket</h1>
            <div className="grid grid-cols-2">
              {theData.map((players) => {
                return (
                  <ShowPlayers
                    handleClick={handleClick}
                    players={players}
                    key={players.id}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <div>
            <h1>Task Status</h1>
            {progressCount.map((progressTask) => (
              <TaskStatus key={progressTask.id} progressTask={progressTask} />
            ))}
          </div>
          <div>
            <h1>Resolved Status</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Players;
