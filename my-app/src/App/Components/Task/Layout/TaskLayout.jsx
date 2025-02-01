import { Button } from '../../Button/Button';
import styles from './TaskLayout.module.css';

export const TaskLayout = ({
	state: { textareaTaskValue },
	handlers: {
		onTaskTextareaChange,
		onUpdateButtonClick,
		onDeleteButtonClick,
		goToBack,
	},
}) => {
	return (
		<div className={styles.taskContainer}>
			<textarea
				className={styles.textarea}
				value={textareaTaskValue}
				onChange={onTaskTextareaChange}
			/>
			<div className={styles.buttonContainer}>
				<Button onClick={onUpdateButtonClick}>Сохранить</Button>
				<Button onClick={onDeleteButtonClick}>Удалить</Button>
				<Button onClick={goToBack}>Назад</Button>
			</div>
		</div>
	);
};
