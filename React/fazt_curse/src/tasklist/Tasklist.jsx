import React from "react";
import TaskCard from "./TaskCard";
import styled from 'styled-components'

const Div = styled.div`
    margin-top:20px;
    display: flex;
    flex-wrap: wrap;
`

export default function Tasklist({ task , deleteTask }) {
  if (task.lenght === 0) {
    console.log("elementos no asignnados");
  }

  return (
    <Div>
      {task.map((task) => (
        <TaskCard task={task} key={task.id} deleteTask={deleteTask} />
      ))}
    </Div>
  );
}
