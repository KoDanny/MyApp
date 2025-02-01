import styles from './ControlPanelLayout.module.css';
import { Button } from '../../Button/Button';
import { Input } from '../../Input/Input';

export const ControlPanelLayout = ({
	state: { inputAddValue, inputSearchValue, isSortingEnable },
	handlers: {
		onAddInputChange,
		onAddButtonClick,
		onSearchInputChange,
		onResetButtonClick,
		onSortCheckboxChange,
	},
}) => {
	return (
		<div className={styles.controlPanel}>
			<div className={styles.addTaskBlock}>
				<Input
					type="text"
					placeholder="Введите текст задачи"
					value={inputAddValue}
					onChange={onAddInputChange}
				/>
				<Button onClick={onAddButtonClick}>Добавить</Button>
			</div>
			<div className={styles.searchBlock}>
				<Input
					type="text"
					placeholder="Введите фразу для поиска"
					value={inputSearchValue}
					onChange={onSearchInputChange}
				/>
				<Button onClick={onResetButtonClick}>Сбросить</Button>
			</div>
			<div className={styles.sortBlock}>
				<label>
					Сортировка в алфавитном порядке
					<Input
						type="checkbox"
						checked={isSortingEnable}
						onChange={onSortCheckboxChange}
					/>
				</label>
			</div>
		</div>
	);
};
