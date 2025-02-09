import { AppContext } from './context';

export const ContextProvider = ({ appValue, children }) => {
	return <AppContext value={appValue}>{children}</AppContext>;
};
