import styles from './Cells.module.css';

export const Cells = ({ state: { field, winPattern } }) => {
	return field.map((cell, index) => {
		let className = styles.cell;

		if (winPattern) {
			className = winPattern.includes(index)
				? styles.cell + ' ' + styles.winCell
				: className;
		}

		return (
			<div className={className} id={index} key={index}>
				{cell}
			</div>
		);
	});
};
