import React, { Component } from "react";
import TaskContent from "./TaskContent";
import styled from "styled-components";
import { tasks } from "./task";

const Form = styled.form``;

const Input = styled.input`
  display: block;
  padding: 10px 5px;
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 5px;
  margin: 10px;
`;

export default class App extends Component {
  render() {
    return (
      <div>
        <Form
          style={{
            width: "20%",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1>Tareas</h1>
          <Input type="text" placeholder="Titulo" />
          <Input
            type="text"
            placeholder="Descripcion"
            style={{ height: "100px" }}
          />
          <Button
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Agregar
          </Button>
        </Form>
        <TaskContent tasks={tasks} />
      </div>
    );
  }
}
