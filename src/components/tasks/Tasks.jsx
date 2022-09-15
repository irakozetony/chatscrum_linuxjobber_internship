import userTasks from "../static/tasks";

import React from "react";

export default function Tasks() {
    return (
        <div className="task_component">
            <div className="task_cards">
                <div className="card">
                    <h3 className="card_title">Weekly tasks</h3>
                    <div className="tasks">
                        {userTasks.map(({id, item}, index) =>{
                            <p className="task" key={id}>
                                {item}
                            </p>
                        })}
                    </div>
                </div>
                <div className="card">
                    <h3 className="card_title">Daily target</h3>
                    <div className="tasks">

                    </div>
                </div>
            </div>
        </div>
    );
}
