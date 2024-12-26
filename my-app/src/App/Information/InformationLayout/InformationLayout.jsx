import styles from './InformationLayout.module.css';
import PropTypes from 'prop-types';

export const InformationLayout = ({ children, isGameEnded }) => {
	const className = isGameEnded ? styles.information + ' ' + styles.endGame : styles.information;
	return (
		<div className={className}>
			<p className={styles.text}>{children}</p>
		</div>
	);
};

InformationLayout.propTypes = {
	children: PropTypes.string,
	isGameEnd: PropTypes.bool,
};
