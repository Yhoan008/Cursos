import styled from "styled-components";
import { AiTwotoneDelete } from "react-icons/ai";

const Div = styled.div`
  width: 300px;
  padding: 0 0 20px 20px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;
const H2 = styled.h2`
    margin: 0 0 0 0;
`;
const Button = styled.button`
  align-self: flex-end;
  position: relative;
  top: -70px;
`;
function TaskCard({ task ,deleteTask }) {

  return (
    <Div>
      <H2>{task.title}</H2>
      <p>{task.descripcion}</p>
      <Button>
        <AiTwotoneDelete onClick={e=>{
            deleteTask(task.id);
        }} />
      </Button>
    </Div>
  );
}

export default TaskCard;
