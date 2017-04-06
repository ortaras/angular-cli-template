import { KeyValueModel } from './../../../../shared/models/key-value.model';

export class SignUpModel {
	constructor(
		public userName: string = '',
		public email: string = '',
		public role: KeyValueModel = null,
		public password: string = '',
		public confirmPassword: string = ''
	) { }
}
