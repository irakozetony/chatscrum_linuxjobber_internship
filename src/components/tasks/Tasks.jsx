import userTasks from "../static/tasks";
import "./tasks.css";
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function Tasks() {
    const [weeklyTaskRoll, updateWeeklyTaskRoll] = useState(userTasks);
    const [dailyTaskRoll, updateDailyTaskRoll] = useState(userTasks)
    const deleteTask = (list, index) =>(
        list.splice(index, 1)
    )
    const handleOnDragEnd = (result) => {
        console.log(result);
        if (!result.destination) return;
        const items = Array.from(weeklyTaskRoll)

        const[reorderedItems] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItems);

        updateWeeklyTaskRoll(items)

        // const { source, destination } = result;
        // if (!destination) return;
        // if(source.droppableId === destination.droppableId){
        //     if(source.droppableId === "weekly"){
        //         let templist = weeklyTaskRoll
        //         const removed = deleteTask(templist, source.index)
        //         templist.splice(destination.index, 0, removed)
        //         updateWeeklyTaskRoll(templist)
        //     }
        //     else{
        //         let templist = dailyTaskRoll
        //         const removed = deleteTask(templist, source.index)
        //         templist.splice(destination.index, 0, removed)
        //         updateDailyTaskRoll(templist)
        //     }
        // }
        // else{
        //     let tempWeeklyList = weeklyTaskRoll
        //     let tempDailyList = dailyTaskRoll

        //     if(source.droppableId === "weekly"){
        //         const removed = deleteTask(tempWeeklyList, source.index)
        //         tempDailyList.splice(destination.index, 0, removed)
        //         updateWeeklyTaskRoll(tempWeeklyList)
        //         updateDailyTaskRoll(tempDailyList)
        //     }
        //     else{
        //         const removed = deleteTask(tempDailyList, source.index)
        //         tempWeeklyList.splice(destination.index, 0, removed)
        //         updateWeeklyTaskRoll(tempWeeklyList)
        //         updateDailyTaskRoll(tempDailyList)
        //     }
        // }
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
                                <div>
                                    {weeklyTaskRoll.map(
                                        ({ id, item }, index) => {
                                            return (
                                                <Draggable
                                                    key={id}
                                                    draggableId={id}
                                                    index={index}
                                                >
                                                    {(provided) => (
                                                        <p
                                                            className="task"
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            ref={
                                                                provided.innerRef
                                                            }
                                                        >
                                                            {item}
                                                        </p>
                                                    )}
                                                </Draggable>
                                            );
                                        }
                                    )}
                                </div>
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
                                <div>
                                    {provided.placeholder}
                                </div>
                            </div>
                        )}
                    </Droppable>
                </div>
            </DragDropContext>
        </div>
    );
}
