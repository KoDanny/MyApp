export const sortTask = (tasks, sort) =>
	sort
		? [...tasks].sort((a, b) => {
				if (a.title > b.title) return 1;
				if (a.title < b.title) return -1;
				return 0;
			})
		: tasks;
