import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserModel } from './../models/user.model';
import { KeyValueModel } from './../models/key-value.model';
import { ClientGlobalsOperationService } from './client-globals-operation.service';

@Injectable()
export class ClientGlobals {
	public user: BehaviorSubject<UserModel>;
	public uiLanguage: BehaviorSubject<string>;

	constructor(private operationService: ClientGlobalsOperationService) {
		this.user = new BehaviorSubject<UserModel>(null);
		this.user.next(operationService.getUserData());

		this.uiLanguage = new BehaviorSubject<string>(null);
		this.uiLanguage.next(operationService.getUILanguage());
	}
}
