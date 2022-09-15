import React, { Component } from "react";
import userData from "../static/data";
import Tasks from "../tasks/Tasks";
import "./scrumboard.css";

export class Scrumboard extends Component {
    constructor() {
        super();

        this.state = {
            data: userData,
            isOpen: false,
            tasks: null,
        };
    }

    openModal = () => {
        this.setState({
            isOpen: true,
        });
    };

    closeModal = () => {
        this.setState({
            isOpen: false,
        });
    };

    handleChange = (e) => {
        this.setState({
            tasks: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            isOpen: false,
        });
    };
    render() {
        console.log("Logged in as ", userData.fullname);
        return (
            <div className="scrumboard">
                <nav>
                    <div className="container">
                        <h1>Chatscrum</h1>
                        <div className="user_info">
                            <p>
                                <span className="info_title">User type:</span>{" "}
                                <span className="info_data">
                                    {userData.usertype}
                                </span>
                            </p>
                            <p>
                                <span className="info_title">
                                    Project name:{" "}
                                </span>{" "}
                                <span className="info_data">
                                    {userData.projectname}
                                </span>
                            </p>
                        </div>
                    </div>
                </nav>
                <main className="container">
                    <p className="welcome_bar">
                        Hello{" "}
                        <span className="user_name">{userData.fullname}</span>
                    </p>
                    <Tasks />
                    <div
                        id="add_task_modal"
                        className={this.state.isOpen ? "show" : "hidden"}
                    >
                        <div className="modal_header">
                            <h3>Add a new task</h3>
                            <button
                                className="close_modal_button"
                                onClick={() => this.closeModal()}
                            >
                                Close
                            </button>
                        </div>

                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor="task_name">Task name</label>
                            <input
                                type="text"
                                name="task_name"
                                onChange={this.handleChange}
                            />
                            <input type="submit" value="Confirm" />
                        </form>
                    </div>
                    <button
                        className="add_task_button"
                        onClick={() => this.openModal()}
                    >
                        Add task
                    </button>
                </main>
            </div>
        );
    }
}

export default Scrumboard;
