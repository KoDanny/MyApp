import styles from './InputField.module.css';

export const InputFieldLayout = (props) => {
	const { type, label, placeholder, onChange, onBlur, name, ref, errors } = props;

	return (
		<div className={styles.fieldContainer}>
			<label className={styles.label}>{label}</label>
			<input
				className={styles.input}
				type={type}
				onChange={onChange}
				onBlur={onBlur}
				name={name}
				ref={ref}
				placeholder={placeholder}
			/>
			{errors?.[name] && (
				<p className={styles.errorMessage}>{errors[name].message}</p>
			)}
		</div>
	);
};
