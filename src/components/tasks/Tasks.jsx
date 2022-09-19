import {taskList, taskColumns} from "../static/tasks";
import "./tasks.css";
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const onDragEnd = (result, columns, setColumns) =>{
    if (!result.destination) return;
    const {source, destination} = result;
    if (source.droppableId !== destination.droppableId){
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];

        const [removed] = sourceItems.splice(source.index, 1)
        destItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems
            },
            [destination.droppableId]:{
                ...destColumn,
                items: destItems
            }
        })
    }
    else{
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]:{
                ...column,
                items: copiedItems
            }
        })
    }
}

export default function Tasks() {
    const [columns, setColumns] = useState(taskColumns);
    return (
        <div className="task_component">
            <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
                <div className="task_cards">
                    {Object.entries(columns).map(([id, column]) =>{
                        return (

                            <div className="card">
                                <h3 className="card_title">{column.name}</h3>
                                <Droppable droppableId={id} key={id}>
                                    {(provided, snapshot) =>{
                                        return(
                                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                                {column.items.map((item, index) =>{
                                                    return(
                                                        <Draggable key={item.id} draggableId={item.id} index={index}>
                                                            {(provided, snapshot) =>{
                                                                return(
                                                                    <p className="task" {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>{item.item}</p>
                                                                )
                                                            }}
                                                        </Draggable>
                                                    );
                                                })}
                                                {provided.placeholder}
                                            </div>
                                        )
                                    }}
                                </Droppable>
                            </div>
                        )
                    })}
                </div>
                {/* <div className="task_cards">
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
                </div> */}
            </DragDropContext>
        </div>
    );
}
