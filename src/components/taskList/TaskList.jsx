import React from "react";
import RiDeleteBack2Fill from "react-icons/ri";

const TaskList = ({ task }) => {
  return (
    <div>
      {task.map((item) => {
        const [id, task, date] = item;
        return (
          <div key={id}>
            <div>
              <h4>{task}</h4>
              <p>{date}</p>
            </div>
            <div>
              <RiDeleteBack2Fill />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
