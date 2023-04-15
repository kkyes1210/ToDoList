import { Draggable } from "@hello-pangea/dnd";
import styled from "styled-components";
import React from "react";

interface ICard {
  isDraggingOver: boolean;
  draggingFromThisWith: boolean;
}

const Right = styled.div`
  //background-color: blue;
  padding: 0px;
  width: 15%;
  height: 100%;
  float: left;
  //수평 수직 정렬
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div<ICard>`
  background-color: #6091e8;
  border: ${(props) =>
    props.draggingFromThisWith ? "1px solid white" : "1px solid black"};
  //padding: 10px 10px;
  margin-bottom: 7px;
  height: 9%;
  ${Right} {
    border-left: ${(props) =>
      props.draggingFromThisWith ? "1px solid white" : "1px solid black"};
  }
  color: ${(props) => (props.draggingFromThisWith ? "white" : "black")};
`;

const Left = styled.div<{ textdeco: boolean }>`
  //background-color: red;
  padding: 0px 0px;
  margin: 0px;
  width: 85%;
  height: 100%;
  float: left;
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-size: 0.8em;
  text-decoration: ${(props) => (!props.textdeco ? "line-through" : "none")};
`;

interface IDraggableCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
  check: boolean;
}

function DraggableCard({
  toDoId,
  toDoText,
  index,
  check,
}: IDraggableCardProps) {
  return (
    <Draggable draggableId={toDoId + ""} index={index}>
      {(magic, snapshot) => (
        <Card
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
          isDraggingOver={Boolean(snapshot.draggingOver)}
          draggingFromThisWith={Boolean(snapshot.isDragging)}
        >
          <Left textdeco={check}>{toDoText}</Left>
          <Right>
            <h2>{!check && "✔"}</h2>
          </Right>
        </Card>
      )}
    </Draggable>
  );
}
export default React.memo(DraggableCard);
