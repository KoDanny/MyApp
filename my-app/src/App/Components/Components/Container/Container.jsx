import styles from './Container.module.css';

export const Container = ({ children, display }) => {
	const className =
		{
			flex: styles.flexContainer,
		}[display] || styles.container;

	return <div className={className}>{children}</div>;
};
