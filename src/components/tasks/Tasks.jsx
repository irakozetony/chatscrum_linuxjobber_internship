import userTasks from "../static/tasks";
import "./tasks.css";
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function Tasks() {
    const [taskRoll, updateTaskRoll] = useState(userTasks);
    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(taskRoll);
        const {source, destination} = result;
        if (source.droppableId !== destination.droppableId) {
            console.log("different droppable")
        } else {
            const [reorderedItems] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItems);
            updateTaskRoll(items);
        }
    };
    return (
        <div className="task_component">
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <div className="task_cards">
                    <Droppable droppableId="weekly">
                        {(provided) => (
                            <div
                                className="card"
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                <h3 className="card_title">Weekly tasks</h3>
                                {taskRoll.map(({ id, item }, index) => (
                                    <Draggable
                                        key={id}
                                        draggableId={id}
                                        index={index}
                                    >
                                        {(provided) => (
                                            <p
                                                className="task"
                                                {...provided.dragHandleProps}
                                                {...provided.draggableProps}
                                                ref={provided.innerRef}
                                            >
                                                {item}
                                            </p>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    <Droppable droppableId="daily">
                        {(provided) => (
                            <div
                                className="card"
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                <h3 className="card_title">Daily target</h3>
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </div>
            </DragDropContext>
        </div>
    );
}
