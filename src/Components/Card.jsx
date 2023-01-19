import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";

const Card = ({ card, index, handleEditCard, handleDeleteCard, color }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(card.text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (severity, id) => {
    setIsEditing(false);
    handleEditCard(severity, id, text);
  };

  const handleDeleteClick = (severity, id) => {
    handleDeleteCard(severity, id);
  };

  return (
    <Draggable draggableId={card.id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`card ${color}`}
          style={{width:"90%",display:"flex",justifyContent:"space-between"}}
        >
          {isEditing ? (
            <>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button onClick={() => handleSaveClick(color, card.id)}>
                Save
              </button>
            </>
          ) : (
            <>
              <p>{text}</p>
              <button onClick={handleEditClick}>Edit</button>
              <button onClick={() => handleDeleteClick(color, card.id)}>
                Delete
              </button>
            </>
          )}
        </div>
      )}
    </Draggable>
  );
};

export default Card;
