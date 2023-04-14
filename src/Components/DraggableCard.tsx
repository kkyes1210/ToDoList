import { Draggable } from "@hello-pangea/dnd";
import styled from "styled-components";
import React from "react";

const Card = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 10px 10px;
  margin-bottom: 5px;
`;

interface IDraggableCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
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
          {toDoText}
        </Card>
      )}
    </Draggable>
  );
}
export default React.memo(DraggableCard);
