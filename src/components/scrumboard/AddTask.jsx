import React, { Component } from "react";

export class AddTask extends Component {
    state = {
        content: "",
    };
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
            content: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            isOpen: false,
        });
        this.props.addTask(this.state);
    };

    render() {
        return (
                <div className="add_task_component">
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
            </div>
        );
    }
}

export default AddTask;
