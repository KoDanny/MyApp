import { errorMessages } from '../constants/errorMessages';
import { emailRegExp } from '../constants/RegExp';

export class Validator {
	#email;
	#password;
	#passwordConfirm;
	#errors;

	constructor(email, password, passwordConfirm) {
		this.#email = email;
		this.#password = password;
		this.#passwordConfirm = passwordConfirm;

		this.#errors = {};
	}

	#validateEmail() {
		if (!this.#email) {
			this.#errors.email = errorMessages.required;
		} else if (!emailRegExp.test(this.#email)) {
			this.#errors.email = errorMessages.email.invalid;
		}
	}

	#validatePassword() {
		if (!this.#password) {
			this.#errors.password = errorMessages.required;
		} else if (this.#password.length < 6) {
			this.#errors.password = errorMessages.password.lowLength;
		} else if (this.#password.length > 10) {
			this.#errors.password = errorMessages.password.highLength;
		}
	}

	#validatePasswordConfirm() {
		if (!this.#passwordConfirm) {
			this.#errors.passwordConfirm = errorMessages.required;
		} else if (this.#password !== this.#passwordConfirm) {
			this.#errors.passwordConfirm = errorMessages.passwordConfirm.invalid;
		}
	}

	validate(fieldName) {
		const validators = {
			email: () => this.#validateEmail(),
			password: () => {
				this.#validatePasswordConfirm();
				this.#validatePassword();
			},
			passwordConfirm: () => {
				this.#validatePasswordConfirm();
				this.#validatePassword();
			},
		};

		validators[fieldName]();

		return this.#errors[fieldName];
	}

	isFormValid() {
		return Object.keys(this.#errors).every((error) => error === null);
	}
}
