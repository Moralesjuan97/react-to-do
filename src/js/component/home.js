import React from "react";

//create your first component
export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = { tasks: ["hacer cafe", "fubol", "cocinar"], newtask: "" };
		this.handleAddTask = this.handleAddTask.bind(this);
		this.handleChangeTask = this.handleChangeTask.bind(this);
	}

	handleChangeTask(event) {
		this.setState({
			...this.state.tasks,
			newtask: event.target.value
		});
	}

	handleAddTask(event) {
		if (event.key == "Enter" && this.state.newtask.length > 4) {
			this.setState({
				tasks: [...this.state.tasks, this.state.newtask],
				newtask: ""
			});
		}
	}

	render() {
		return (
			<div className="text-center mt-5">
				<h1>To-Do List</h1>

				<input
					value={this.state.newtask}
					placeholder="New to-do"
					onChange={event => this.handleChangeTask(event)}
					onKeyPress={event => this.handleAddTask(event)}
				/>
				<ul>
					{this.state.tasks.map((task, index) => {
						return <li key={index}>{task}</li>;
					})}
				</ul>
				<footer>Por realizar : {this.state.tasks.length}</footer>
			</div>
		);
	}
}
