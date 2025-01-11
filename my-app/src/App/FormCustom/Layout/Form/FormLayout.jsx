import styles from './FormLayout.module.css';

export const FormLayout = ({ children, onSubmit }) => {
	return (
		<form className={styles.form} onSubmit={onSubmit}>
			{children}
		</form>
	);
};
