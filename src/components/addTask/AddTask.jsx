import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddTask = ({ getTask }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { task, date };
    addNewTask(newTask);
    setTask("");

    console.log(newTask);
  };

  const addNewTask = async (newTask) => {
    const url = "https://63518211dfe45bbd55c21be0.mockapi.io/api/tasks";
    try {
      await axios.post(url, newTask);
      getTask();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="d-flex flex-column">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter task"
            onChange={(e) => setTask(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>

        <Button className="mb-4 bg-danger" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddTask;
