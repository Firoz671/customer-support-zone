import React, { use, useState } from "react";
import ShowPlayers from "./ShowPlayers";
import Banner from "./Banner";
import { toast } from "react-toastify";
import TaskStatus from "./TaskStatus";
import ResolvedStatus from "./ResolvedStatus";

const Players = ({ dataPromise }) => {
  const theData = use(dataPromise);
  const [progressCount, setProgressCount] = useState([]);
  const [completedCount, setCompletedCount] = useState([]);
  const [afterResolved, setAfterResolved] = useState(theData);

  // Card Handler
  const handleClick = (data) => {
    const isExist = progressCount.find((task) => task.id === data.id);

    if (isExist) {
      toast.warn("This task is already in progress.");
      return;
    }
    toast.info("clicked");
    const newData = [...progressCount, data];
    setProgressCount(newData);
  };

  //Complete Handler

  const completeHandler = (data) => {
    const newCompleted = [...completedCount, data];
    setCompletedCount(newCompleted);

    const remainingTasks = progressCount.filter((task) => task.id !== data.id);
    setProgressCount(remainingTasks);

    const remaining = afterResolved.filter((task) => task.id !== data.id);
    setAfterResolved(remaining);
  };

  return (
    <div>
      <Banner completedCount={completedCount} progressCount={progressCount} />
      <div className="w-11/12 mx-auto p-5 flex gap-5">
        <div className="w-[70%]">
          <div>
            <h1 className="bold">Customer Ticket</h1>
            <div className="grid grid-cols-2">
              {afterResolved.map((players) => {
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
        <div className="w-[30%] p-5 space-y-10">
          <div>
            <h1 className="bold">Task Status</h1>
            <p className="text-gray-500 py-5">
              Select a ticket to add to Task Status
            </p>
            {progressCount.map((progressTask) => (
              <TaskStatus
                completeHandler={completeHandler}
                key={progressTask.id}
                progressTask={progressTask}
              />
            ))}
          </div>
          <div>
            <h1 className="bold">Resolved Status</h1>
            <p className="text-gray-500 py-5">No resolved tasks yet.</p>
            {completedCount.map((completedTask) => (
              <ResolvedStatus
                completedTask={completedTask}
                key={completedTask.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Players;
