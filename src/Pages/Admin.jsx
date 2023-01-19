import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Card from "../Components/Card";

export const Admin = () => {
  const [criticalSeverity, setCriticalSeverity] = useState([]);
  const [majorSeverity, setMajorSeverity] = useState([]);
  const [mediumSeverity, setMediumSeverity] = useState([]);
  const [lowSeverity, setLowSeverity] = useState([]);

  const handleAddCard = (severity) => {
    if (severity === "critical") {
      setCriticalSeverity([
        ...criticalSeverity,
        { id: criticalSeverity.length + 1, text: "" },
      ]);
    } else if (severity === "major") {
      setMajorSeverity([
        ...majorSeverity,
        { id: majorSeverity.length + 1, text: "" },
      ]);
    } else if (severity === "medium") {
      setMediumSeverity([
        ...mediumSeverity,
        { id: mediumSeverity.length + 1, text: "" },
      ]);
    } else if (severity === "low") {
      setLowSeverity([
        ...lowSeverity,
        { id: lowSeverity.length + 1, text: "" },
      ]);
    }
  };

  const handleEditCard = (severity, id, text) => {
    if (severity === "critical") {
      const newCards = criticalSeverity.map((card) => {
        if (card.id === id) {
          return { id, text };
        }
        return card;
      });
      setCriticalSeverity(newCards);
    } else if (severity === "major") {
      const newCards = majorSeverity.map((card) => {
        if (card.id === id) {
          return { id, text };
        }
        return card;
      });
      setMajorSeverity(newCards);
    } else if (severity === "medium") {
      const newCards = mediumSeverity.map((card) => {
        if (card.id === id) {
          return { id, text };
        }
        return card;
      });
      setMediumSeverity(newCards);
    } else if (severity === "low") {
      const newCards = lowSeverity.map((card) => {
        if (card.id === id) {
          return { id, text };
        }
        return card;
      });
      setLowSeverity(newCards);
    }
  };

  const handleDeleteCard = (severity, id) => {
    if (severity === "critical") {
      setCriticalSeverity(criticalSeverity.filter((card) => card.id !== id));
    } else if (severity === "major") {
      setMajorSeverity(majorSeverity.filter((card) => card.id !== id));
    } else if (severity === "medium") {
      setMediumSeverity(mediumSeverity.filter((card) => card.id !== id));
    } else if (severity === "low") {
      setLowSeverity(lowSeverity.filter((card) => card.id !== id));
    }
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let newCards = [];
    if (source.droppableId === "critical") {
      newCards = [...criticalSeverity];
    } else if (source.droppableId === "major") {
      newCards = [...majorSeverity];
    } else if (source.droppableId === "medium") {
      newCards = [...mediumSeverity];
    } else if (source.droppableId === "low") {
      newCards = [...lowSeverity];
    }

    const removedCard = newCards.splice(source.index, 1);

    if (destination.droppableId === "critical") {
      newCards = [...criticalSeverity];
      newCards.splice(destination.index, 0, removedCard[0]);
      setCriticalSeverity(newCards);
    } else if (destination.droppableId === "major") {
      newCards = [...majorSeverity];
      newCards.splice(destination.index, 0, removedCard[0]);
      setMajorSeverity(newCards);
    } else if (destination.droppableId === "medium") {
      newCards = [...mediumSeverity];
      newCards.splice(destination.index, 0, removedCard[0]);
      setMediumSeverity(newCards);
    } else if (destination.droppableId === "low") {
      newCards = [...lowSeverity];
      newCards.splice(destination.index, 0, removedCard[0]);
      setLowSeverity(newCards);
    }
  };

  return (
    <div style={{ width: "80%", margin: "auto", display: "flex" }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="stacks-container" style={{ width: "100%", margin: "auto", display: "flex",justifyContent:"space-evenly" }}>
          <Droppable droppableId="critical">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <h2>Critical Severity</h2>
                <button onClick={() => handleAddCard("critical")}>
                  Report Bug
                </button>
                {criticalSeverity.map((card, index) => (
                  <Card
                    key={card.id}
                    card={card}
                    index={index}
                    handleEditCard={handleEditCard}
                    handleDeleteCard={handleDeleteCard}
                    color="red"
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="major">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <h2>Major Severity</h2>
                <button onClick={() => handleAddCard("major")}>
                  Report Bug
                </button>
                {majorSeverity.map((card, index) => (
                  <Card
                    key={card.id}
                    card={card}
                    index={index}
                    handleEditCard={handleEditCard}
                    handleDeleteCard={handleDeleteCard}
                    color="orange"
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="medium">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <h2>Medium Severity</h2>
                <button onClick={() => handleAddCard("medium")}>
                  Report Bug
                </button>
                {mediumSeverity.map((card, index) => (
                  <Card
                    key={card.id}
                    card={card}
                    index={index}
                    handleEditCard={handleEditCard}
                    handleDeleteCard={handleDeleteCard}
                    color="blue"
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="low">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <h2>Low Severity</h2>
                <button onClick={() => handleAddCard("low")}>Report Bug</button>
                {lowSeverity.map((card, index) => (
                  <Card
                    key={card.id}
                    card={card}
                    index={index}
                    handleEditCard={handleEditCard}
                    handleDeleteCard={handleDeleteCard}
                    color="green"
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
};
