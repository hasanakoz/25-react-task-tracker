import React, { useState } from "react";
import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useEffect } from "react";

const Home = () => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Show Task Bar");
  const [task, setTask] = useState();
  const url = "https://63518211dfe45bbd55c21be0.mockapi.io/api/tasks";

  const toggle = (e) => {
    setShow(!show);
    const buttonText = show ? "Show Task Bar" : "Hide Task Bar";
    setText(buttonText);
  };

  const getTask = async () => {
    const data = await axios(url);
    setTask(data);
    console.log(data);
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <div>
      <Button
        onClick={() => {
          toggle();
        }}
        variant="primary"
      >
        {text}
      </Button>
      {show && <AddTask />}
      <TaskList task={task} />
    </div>
  );
};

export default Home;
