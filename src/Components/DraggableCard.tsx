import { Draggable } from "@hello-pangea/dnd";
import styled from "styled-components";
import React from "react";

const Card = styled.div`
  //background-color: white;
  background-color: #6091e8;
  border: 1px solid black;
  //padding: 10px 10px;
  margin-bottom: 7px;
  height: 9%;
`;

const Left = styled.div`
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
`;

const Right = styled.div`
  //background-color: blue;
  padding: 0px;
  margin: 0px;
  width: 15%;
  height: 100%;
  float: left;
  border-left: 1px solid black;
`;

interface IDraggableCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
}

{
  /* <Area
              isDraggingOver={snapshot.isDraggingOver}
              draggingFromThisWith={Boolean(snapshot.draggingFromThisWith)}
              ref={magic.innerRef}
              {...magic.droppableProps}
            ></Area> */
}

function DraggableCard({ toDoId, toDoText, index }: IDraggableCardProps) {
  return (
    <Draggable draggableId={toDoId + ""} index={index}>
      {(magic) => (
        <Card
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          <Left>{toDoText}</Left>
          <Right></Right>
        </Card>
      )}
    </Draggable>
  );
}
export default React.memo(DraggableCard);
