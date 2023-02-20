import styled from "styled-components";
import Task from "../../components/Task/Task";
import useDataFetching from "../../hooks/useDataFetching"

const BacklogWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 5%;
`;

const Title = styled.h2`
	width: 100%;
	padding-bottom: 10px;
	text-align: left;
	border-bottom: 1px solid darkgray;
`;

const TasksWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	flex-wrap: wrap;
	margin: 5%;
`;

function Backlog() {
	const [loading, error, tasks] = useDataFetching(
		`https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks`,
	);

	return (
		<BacklogWrapper>
			<Title>Backlog</Title>
			<TasksWrapper>
				{loading || error ? (
					<span>{error || "Loading..."}</span>
				) : (
					tasks.map((task) => (
						<Task
							key={task.id}
							title={task.title}
							body={task.body}
						/>
					))
				)}
			</TasksWrapper>
		</BacklogWrapper>
	)
}

export default Backlog;
