import styles from './Button.module.css';

export const Button = ({ type, disable, children, ref }) => {
	const className = disable ? styles.button + ' ' + styles.disabled : styles.button;
	return (
		<button className={className} type={type} disable={disable} ref={ref}>
			{children}
		</button>
	);
};
