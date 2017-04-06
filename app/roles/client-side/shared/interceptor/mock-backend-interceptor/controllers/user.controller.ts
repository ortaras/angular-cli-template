import { Injectable } from '@angular/core';
import { StorageService } from './../../../services/storage.service';

@Injectable()
export class UserController {
	constructor(private _storage: StorageService) { }

	getAll() {
		let users = this._storage.getItem('users');
		return users;
	}
}
