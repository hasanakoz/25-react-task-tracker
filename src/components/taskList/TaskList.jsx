import axios from "axios";
import React from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";

const TaskList = ({ task, getTask }) => {
  const deleteTask = async (id) => {
    const url = "https://63518211dfe45bbd55c21be0.mockapi.io/api/tasks";
    try {
      await axios.delete(`${url}/${id}`);
      getTask();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {task.map((item) => {
        const { id, task, date } = item;
        return (
          <div
            key={id}
            className="mt-2 d-flex justify-content-between bg-secondary rounded-2 p-2 align-items-center"
          >
            <div>
              <h4>{task}</h4>
              <p>{date}</p>
            </div>
            <div>
              <RiDeleteBack2Fill
                className="text-warning"
                onClick={() => {
                  deleteTask(id);
                }}
                style={{
                  cursor: "pointer",
                  marginRight: "20px",
                  fontSize: "2rem",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
