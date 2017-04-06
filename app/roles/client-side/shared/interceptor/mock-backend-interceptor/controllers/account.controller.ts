import { Injectable } from '@angular/core';
import { StorageService } from './../../../services/storage.service';
import { SignUpModel } from './../../../../modules/authentification/sign-up/sign-up-shared/sign-up.model';
import { Request, ResponseOptions } from '@angular/http';
import { UserRole } from "../../../enums/userRole.enum";
import { PopupsService } from './../../../components/popups/popups-shared/popups.service';
import { ErrorPopupModel } from './../../../components/popups/error-popup/error-popup-shared/error-popup.model';

@Injectable()
export class AccountController {
	constructor(private _storage: StorageService,
		private _popupService: PopupsService) { }

	signIn(model) {
		model = JSON.parse(model);
		let users = JSON.parse(this._storage.getItem('users'));
		if (users === null) {
			users = [];
		}

		let user = this.getUser(users, model.email, model.password);

		if (user !== null) {
			return {
				userName: user.userName,
				email: user.email,
				role: user.role
			};
		}

		this._popupService.open(new ErrorPopupModel('Invalid credentials', 'Error'));
		return 'error';
	}

	signUp(model) {
		model = JSON.parse(model);
		let users = JSON.parse(this._storage.getItem('users'));
		if (users === null) {
			users = [];
		}

		if (!Array.isArray(users)) {
			this._popupService.open(new ErrorPopupModel('Mock backend. Can\'t store user.', 'Error'));
			return 'error';
		}

		if (!this.isUserExist(users, model.email)) {
			users.push({ userName: model.userName, email: model.email, role: UserRole.client, password: model.password });
			this._storage.setItem('users', JSON.stringify(users));
		} else {
			this._popupService.open(new ErrorPopupModel('User already exist', 'Error'));
			return 'error';
		}
	}

	private getUser(users, email, password) {
		for (let i = 0; i < users.length; i++) {
			if (users[i].email === email && users[i].password === password) {
				return users[i];
			}
		}
		return null;
	}

	private isUserExist(users, email): boolean {
		for (let i = 0; i < users.length; i++) {
			if (users[i].email === email) {
				return true;
			}
		}
		return false;
	}
}
