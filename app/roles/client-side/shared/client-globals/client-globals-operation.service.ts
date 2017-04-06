import { MainConfig } from './../../../../config/config';
import { StorageService } from './../services/storage.service';
import { KeyValueModel } from './../models/key-value.model';
import { UserModel } from './../models/user.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ClientGlobalsOperationService {
	constructor(private _storage: StorageService) { }

	public getUserData(): UserModel {
		let userData = this._storage.getItem('user');
		if (userData) {
			let user = <UserModel>JSON.parse(userData);
			return UserModel.fromJSON(user);
		}
		return null;
	}

	public getUILanguage(): string {
		let languageData = this._storage.getItem('lang');
		return languageData || MainConfig.defaultLanguage;
	}
}
