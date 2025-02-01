export const getSearchedTasks = (tasks = {}, inputSearchValue = null) =>
	tasks.filter(({ title }) => {
		if (!title) {
			throw new Error(`key "title" not found in task`);
		}

		const normalizeTitle = title.toLowerCase();
		const searchPhrase = inputSearchValue.toLowerCase();

		return normalizeTitle.includes(searchPhrase);
	});
