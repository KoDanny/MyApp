export const updateField = (field, index, currentPlayer) => {
	const newField = [...field];
	newField[index] = currentPlayer;
	return newField;
};
