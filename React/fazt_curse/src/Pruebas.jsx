import React from "react";
import { useState } from "react";

export function Estados() {
  let [counter, setCounter] = useState(0);

  return (
    <>
      <h2>Counter : {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Sumar</button>
      <button onClick={() => setCounter(counter - 1)}>Restar</button>
    </>
  );
}

export class EstadosClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  render() {
    return (
      <>
        <h2>Counter : {this.state.counter}</h2>
        <button
          onClick={() => {
            this.setState({
              counter : this.state.counter + 1,
            });
          }}
        >
          Sumar
        </button>
        <button onClick={()=>this.setState({counter : this.state.counter-1})} >Restar</button>
      </>
    );
  }
}
