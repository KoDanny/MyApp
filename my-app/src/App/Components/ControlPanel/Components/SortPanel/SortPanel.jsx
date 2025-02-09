import { AppContext } from '../../../../Context/context';
import { Container, Input } from '../../../Components';
import { useContext } from 'react';

export const SortPanel = () => {
	const {
		state: { isSortingEnable },
		setPropertiesState,
	} = useContext(AppContext);

	const onSortCheckboxChange = ({ target }) =>
		setPropertiesState({ isSortingEnable: target.checked });

	return (
		<Container display="flex">
			<label htmlFor="sort-check" style={{ fontSize: '1.2rem' }}>
				Сортировать в алфавитном порядке
			</label>
			<Input
				type="checkbox"
				id="sort-check"
				checked={isSortingEnable}
				onChange={onSortCheckboxChange}
			/>
		</Container>
	);
};
