import { useContext, useState } from 'react';
import { Container, Button, Input } from '../../../Components';
import { createTask, readTask } from '../../../../API';
import { AppContext } from '../../../../Context/context';

export const AddPanel = () => {
	const [inputValue, setInputValue] = useState('');
	const { setPropertiesState } = useContext(AppContext);

	const onInputAddChange = ({ target }) => setInputValue(target.value);

	const onButtonAddClick = async () => {
		await createTask({ title: inputValue });

		const tasks = await readTask();

		setPropertiesState({ tasks });
		setInputValue('');
	};

	return (
		<Container display="flex">
			<Input type="text" value={inputValue} onChange={onInputAddChange} />
			<Button onClick={onButtonAddClick}>Добавить</Button>
		</Container>
	);
};
