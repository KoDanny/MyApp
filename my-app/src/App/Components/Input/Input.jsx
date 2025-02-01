import styles from './Input.module.css';

export const Input = ({ type, ...props }) => {
	const className = {
		text: styles.text,
		checkbox: styles.checkbox,
	}[type];

	return <input className={className} type={type} {...props} />;
};
