import { Droppable } from "@hello-pangea/dnd";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";
import { useForm } from "react-hook-form";
import { IToDo } from "../atom";
import { useRecoilState, useSetRecoilState } from "recoil";
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
  //background-color: white;
  width: 90%;
  margin: 0 auto;
  padding-top: 10px;
  border-bottom: 2px solid black;
  //margin-bottom: 20px;
`;

/* interface IAreaProps {
  isDraggingOver: boolean;
  draggingFromThisWith: boolean;
}
 */

const Area = styled.div`
  flex-grow: 1;
  padding: 5%;
  //background-color: red;
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
  //background-color: red;
  display: inline-block;
  text-align: center;
  height: 8%;
`;

const Input = styled.input`
  width: 90%;
  height: 80%;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid black;
  color: whitesmoke;
  outline: none;
  ::placeholder {
    color: black;
  }
`;

const Add = styled.div`
  font-size: 2em;
  font-weight: 600;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 10px;
`;

function Board({ toDos, boardId }: IBoardProps) {
  const [ToDos, setToDos] = useRecoilState(toDoState);
  //const setToDos = useSetRecoilState(toDoState);
  const { register, setValue, handleSubmit } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    //console.log(ToDos["Todo List"].length);
    if (ToDos["Todo List"].length < 9) {
      const newToDo = {
        id: Date.now(),
        text: toDo,
      };
      setValue("toDo", "");
      setToDos((allBoard) => {
        return { ...allBoard, [boardId]: [...allBoard[boardId], newToDo] };
      });
    }
  };

  return (
    <Wrapper>
      <Droppable droppableId={boardId}>
        {(magic, snapshot) => (
          <>
            <Title>{boardId}</Title>
            <Area ref={magic.innerRef} {...magic.droppableProps}>
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
          </>
        )}
      </Droppable>
      {boardId === "Todo List" ? (
        <>
          <Add>Add</Add>
          <Form onSubmit={handleSubmit(onValid)}>
            <Input
              {...register("toDo", { required: true })}
              type="text"
              placeholder={`Add task on ${boardId}`}
            />
          </Form>
        </>
      ) : (
        <>
          <Add style={{ color: "#6091e8" }}>blank</Add>
          <Form></Form>
        </>
      )}
    </Wrapper>
  );
}
export default Board;
