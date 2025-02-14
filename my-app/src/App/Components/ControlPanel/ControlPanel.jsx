import styles from './ControlPanel.module.css';
import * as action from '../../actions';
import { useAppState } from '../../Hooks';

export const ControlPanel = () => {
	const { dispatch } = useAppState();

	const onResetButtonClick = () => {
		dispatch(action.reset());
	};

	return (
		<div className={styles.buttonContainer}>
			<button className={styles.button} onClick={onResetButtonClick}>
				Начать заново
			</button>
		</div>
	);
};
