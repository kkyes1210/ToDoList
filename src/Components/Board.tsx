import { Droppable } from "@hello-pangea/dnd";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";
import { useForm } from "react-hook-form";
import { IToDo } from "../atom";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atom";

const Wrapper = styled.div`
  width: 20vw;
  min-width: 200px;
  background-color: #6091e8;
  //padding-top: 10px;
  //border-radius: 5px;
  min-height: 400px;
  height: 85vh;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  //text-align: center;
  font-weight: 600;
  padding-bottom: 10px;
  font-size: 2em;
  background-color: white;
  width: 100%;
  margin: 0 auto;
  border-bottom: 2px solid black;
  margin-bottom: 20px;
`;

interface IAreaProps {
  isDraggingOver: boolean;
  draggingFromThisWith: boolean;
}

const Area = styled.div<IAreaProps>`
  background-color: ${(props) =>
    props.isDraggingOver
      ? "pink"
      : props.draggingFromThisWith
      ? "red"
      : "	#6091E8"};
  transition: background-color 0.3s ease-in-out;
  flex-grow: 1;
  padding: 20px;
`;

interface IBoardProps {
  toDos: IToDo[];
  boardId: string;
}

interface IForm {
  toDo: string;
}

const Form = styled.form`
  width: 100%;
  input {
    width: 100%;
  }
`;

function Board({ toDos, boardId }: IBoardProps) {
  const setToDos = useSetRecoilState(toDoState);
  const { register, setValue, handleSubmit } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    const newToDo = {
      id: Date.now(),
      text: toDo,
    };
    setValue("toDo", "");
    setToDos((allBoard) => {
      return { ...allBoard, [boardId]: [...allBoard[boardId], newToDo] };
    });
  };

  return (
    <Wrapper>
      {boardId === "Todo List" ? (
        <Form onSubmit={handleSubmit(onValid)}>
          <input
            {...register("toDo", { required: true })}
            type="text"
            placeholder={`Add task on ${boardId}`}
          />
        </Form>
      ) : null}
      <Droppable droppableId={boardId}>
        {(magic, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            draggingFromThisWith={Boolean(snapshot.draggingFromThisWith)}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            <Title>{boardId}</Title>
            {toDos.map((toDo, index) => (
              <DraggableCard
                key={toDo.id}
                index={index}
                toDoId={toDo.id}
                toDoText={toDo.text}
              />
            ))}
            {magic.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}
export default Board;
