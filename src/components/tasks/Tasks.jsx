import userTasks from "../static/tasks";
import "./tasks.css";
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

export default function Tasks() {
    const [weeklyTaskRoll, updateWeeklyTaskRoll] = useState(['first task', 'second task', 'third task', 'fourth task', 'fith task']);
    const [dailyTaskRoll, updateDailyTaskRoll] = useState([]);
    const deleteItem = (list, index) => (list.splice(index, 1))
    const handleOnDragEnd = (result) => {
        const {source, destination} = result;
        if (!destination){
            console.log("No destination");
            return;
        }
        if (source.droppableId === destination.droppableId){
            if(source.droppableId === 'weekly'){
                let tempList = weeklyTaskRoll;
                const removed=  deleteItem(tempList, source.index);
                tempList.splice(destination.index, 0, removed);
                updateWeeklyTaskRoll(tempList);
            }
            else{
                let tempList = dailyTaskRoll
                const removed = deleteItem(tempList, source.index);
                tempList.splice(destination.index, 0, removed);
                updateDailyTaskRoll(tempList);
            }
        }
        else{
            let tempWeekly = weeklyTaskRoll;
            let tempDaily = dailyTaskRoll;
            if(source.droppableId === 'weekly'){
                const removed = deleteItem(tempWeekly, source.index);
                tempDaily.splice(destination.index, 0, removed);
                updateWeeklyTaskRoll(tempWeekly);
                updateDailyTaskRoll(tempDaily);
            }
            else{
                const removed = deleteItem(tempDaily, source.index);
                tempWeekly.splice(destination.index, 0, removed);
                updateWeeklyTaskRoll(tempWeekly);
                updateDailyTaskRoll(tempDaily);
            }
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
                                {weeklyTaskRoll.map((data, index) => (
                                    <Draggable
                                        key={index}
                                        draggableId={`${data}${index}`}
                                        index={index}
                                    >
                                        {(provided) => (
                                            <p
                                                className="task"
                                                {...provided.dragHandleProps}
                                                {...provided.draggableProps}
                                                ref={provided.innerRef}
                                            >
                                                {data}
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
                                <h3 className="card_title">Dail target</h3>
                                {dailyTaskRoll.map((data, index) => (
                                    <Draggable
                                        key={index}
                                        draggableId={`${data}${index}`}
                                        index={index}
                                    >
                                        {(provided) => (
                                            <p
                                                className="task"
                                                {...provided.dragHandleProps}
                                                {...provided.draggableProps}
                                                ref={provided.innerRef}
                                            >
                                                {data}
                                            </p>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </div>
            </DragDropContext>
        </div>
    );
}
