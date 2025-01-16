import { TaskListLayout } from './Components';
import { useRequestTask } from './Hooks';

export const App = () => {
	const { tasks, isLoadingTasks } = useRequestTask();
	return <TaskListLayout tasks={tasks} isLoading={isLoadingTasks} />;
};
