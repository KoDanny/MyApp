import styles from './FieldLayout.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({ field, winPattern, handlerClick }) => {
	const $sectors = field.map((sector, index) => {
		let className = styles.sector;
		if (winPattern) {
			const winSector = winPattern.indexOf(index) !== -1 ? ' ' + styles.winSector : '';
			className += winSector;
		}

		return (
			<div key={index} className={className} id={index}>
				{sector}
			</div>
		);
	});

	return (
		<div className={styles.field} onClick={handlerClick}>
			{$sectors}
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	handlerClick: PropTypes.func,
	winPattern: PropTypes.array,
};
