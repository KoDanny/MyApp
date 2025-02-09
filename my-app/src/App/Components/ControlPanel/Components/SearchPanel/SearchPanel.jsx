import { useState } from 'react';
import { Container, Button, Input } from '../../../Components';
import { useContext } from 'react';
import { AppContext } from '../../../../Context/context';

export const SearchPanel = () => {
	const {
		state: { searchValue, refreshFlag },
		setPropertiesState,
	} = useContext(AppContext);

	const [value, setValue] = useState(searchValue);

	const onChange = ({ target }) => {
		setValue(target.value);
		setPropertiesState({ searchValue: target.value, refreshFlag: !refreshFlag });
	};

	const onResetButtonClick = () => {
		setValue('');
		setPropertiesState({ refreshFlag: !refreshFlag, searchValue: '' });
	};

	return (
		<Container display="flex">
			<Input type="text" value={value} onChange={onChange} />
			<Button onClick={onResetButtonClick}>Сбросить</Button>
		</Container>
	);
};
