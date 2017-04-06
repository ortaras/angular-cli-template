import { KeyValueModel } from './../../../../shared/models/key-value.model';

export class SignInModel {
	constructor(
		public email: string = '',
		public role: KeyValueModel = null,
		public password: string = ''
	) { }
}
