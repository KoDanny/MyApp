import { InformationLayout } from './InformationLayout/InformationLayout';
import PropTypes from 'prop-types';

const getInformation = (currentPlayer, isDraw, isGameEnded) => {
	if (isDraw) return 'Ничья';
	if (isGameEnded) return `Победа: ${currentPlayer}`;
	return `Ходит: ${currentPlayer}`;
};

export const Information = ({ currentPlayer, isDraw, isGameEnded }) => {
	const content = getInformation(currentPlayer, isDraw, isGameEnded);
	return <InformationLayout isGameEnded={isGameEnded}>{content}</InformationLayout>;
};

Information.propTypes = {
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
};
