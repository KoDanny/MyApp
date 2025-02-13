export const getWinPattern = (field, patterns) => {
	const index = patterns.findIndex(
		([index1, index2, index3]) =>
			field[index1] &&
			field[index1] === field[index2] &&
			field[index2] === field[index3],
	);

	return patterns[index] || null;
};
