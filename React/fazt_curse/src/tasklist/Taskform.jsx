import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding:0;
    }
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Input = styled.input`
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
`;

const Button = styled.button`
    padding : 10px;
    border-radius: 10px; 
    cursor:pointer;
`

function Taskform({ changeState }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState("");

  const setSubmit = (e) => {
    e.preventDefault();
    changeState(title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <>
      <GlobalStyle />
      <Form onSubmit={setSubmit}>
        <Input
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
          value={title}
        />
        <Textarea
          placeholder="Escribe tu descripcion"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        ></Textarea>
        <Button>Agregar Tarea</Button>
      </Form>
    </>
  );
}

export default Taskform;
