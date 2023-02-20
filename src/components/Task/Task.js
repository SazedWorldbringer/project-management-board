import "./Task.css";

function Task({ id, title, body, onDragStart }) {
	return (
		<div
			className="Task-wrapper"
			draggable
			onDragStart={onDragStart}
		>
			<h3>{title}</h3>
			<p>{body}</p>
		</div>
	)
}

export default Task;
