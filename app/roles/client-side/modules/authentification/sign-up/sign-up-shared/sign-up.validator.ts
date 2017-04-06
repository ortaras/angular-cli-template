import { SignUpModel } from './sign-up.model';
import { ValidationPropertyModel } from './../../../../shared/models/validator-property.model';
import { Validator } from './../../../../../../validator/validator';

export class SignupValidator extends Validator {
	username: ValidationPropertyModel;
	email: ValidationPropertyModel;
	password: ValidationPropertyModel;
	confirmPassword: ValidationPropertyModel;

	constructor(public model: SignUpModel) {
		super();
		this.username = new ValidationPropertyModel();
		this.email = new ValidationPropertyModel();
		this.password = new ValidationPropertyModel();
		this.confirmPassword = new ValidationPropertyModel();
	}

	isUserNameValid(control, modelProperty?): ValidationPropertyModel {
		this._setValid(this.username);
		let value = this._getValue(control, modelProperty);
		if (this._validate(this.username, control, modelProperty)) {
			if (!this._isNotEmptyOrWhitespace(value)) {
				this.username.isValid = false;
				this.username.message = "signup__form_required_username";
			} else if (!this._isMinLengthValid(value, 3)) {
				this.username.isValid = false;
				this.username.message = "signup__form_min3_username";
			}
		}
		return this.username;
	}

	isEmailValid(control, modelProperty?): ValidationPropertyModel {
		this._setValid(this.email);
		let value = this._getValue(control, modelProperty);
		if (this._validate(this.email, control, modelProperty)) {
			if (!this._isNotEmptyOrWhitespace(value)) {
				this.email.isValid = false;
				this.email.message = "signup__form_required_email";
			} else if (!this._isEmailValid(value)) {
				this.email.isValid = false;
				this.email.message = "signup__form_invalid_email";
			}
		}
		return this.email;
	}

	isPasswordValid(control, modelProperty?): ValidationPropertyModel {
		this._setValid(this.password);
		let value = this._getValue(control, modelProperty);
		if (this._validate(this.password, control, modelProperty)) {
			if (!this._isNotEmptyOrWhitespace(value)) {
				this.password.isValid = false;
				this.password.message = "signup__form_required_password";
			} else if (!this._isMinLengthValid(value)) {
				this.password.isValid = false;
				this.password.message = "signup__form_min6_password";
			}
		}
		return this.password;
	}

	isConfirmPasswordValid(control, modelProperty?): ValidationPropertyModel {
		this._setValid(this.confirmPassword);
		let value = this._getValue(control, modelProperty);
		if (this._validate(this.confirmPassword, control, modelProperty)) {
			if (!this._isNotEmptyOrWhitespace(value)) {
				this.confirmPassword.isValid = false;
				this.confirmPassword.message = "signup__form_required_confirm_password";
			} else if (!this._isMinLengthValid(value)) {
				this.confirmPassword.isValid = false;
				this.confirmPassword.message = "signup__form_min6_confirm_password";
			} else if (this.model.password !== this.model.confirmPassword) {
				this.confirmPassword.isValid = false;
				this.confirmPassword.message = "signup__form_passwords_match";
			}
		}
		return this.confirmPassword;
	}

	isFormValid(): boolean {
		this.isUserNameValid(null, this.model.userName);
		this.isEmailValid(null, this.model.email);
		this.isPasswordValid(null, this.model.password);
		this.isConfirmPasswordValid(null, this.model.confirmPassword);
		return this.username.isValid && this.email.isValid
			&& this.password.isValid && this.confirmPassword.isValid;
	}
}
