import { ControlPanel } from '../ControlPanel/ControlPanel';
import { TasksList } from '../TasksList/TasksList';
import styles from './MainPage.module.css';

export const MainPage = (props) => {
	console.log('Render MainPage');
	return (
		<div className={styles.app}>
			<ControlPanel {...props} />
			<TasksList {...props} />
		</div>
	);
};
