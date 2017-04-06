import { UserRole } from "../enums/userRole.enum";

export class UserModel {
	constructor(
		public userName: string,
		public email: string,
		public role: UserRole
	) { }

	static fromJSON(object: any): UserModel {
		return new UserModel(
			object['userName'],
			object['email'],
			object['role']
		);
	}

	static fromJSONArray(array: Array<Object>): UserModel[] {
		return array.map(obj => UserModel.fromJSON(obj));
	}
}
