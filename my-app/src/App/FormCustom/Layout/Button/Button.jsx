import styles from './Button.module.css';

export const Button = ({ type, disable, children, ref, onClick }) => {
	const className = disable ? styles.button + ' ' + styles.disabled : styles.button;
	return (
		<button
			className={className}
			type={type}
			ref={ref}
			disable={disable}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
