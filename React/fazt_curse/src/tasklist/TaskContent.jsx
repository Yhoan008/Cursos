import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(4, 300px);
  grid-gap: 20px;
`;

export default class TaskContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: this.props.tasks,
    };
  }

  render() {
    return (
      <Container>
        {this.state.tasks.length == 0 ? (
          <h2>No hay tareas</h2>
        ) : (
          this.state.tasks.map((task) => {
            return (
              <div
                key={task.id}
                style={{
                  border: "2px solid black",
                  padding: "0px 10px",
                }}
              >
                <h2>{task.title}</h2>
                <p>{task.descripcion}</p>
              </div>
            );
          })
        )}
      </Container>
    );
  }
}
