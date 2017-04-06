import { InfoController } from './controllers/info.controller';
import { AccountController } from './controllers/account.controller';
import { Injectable } from '@angular/core';
import { MockConnection } from '@angular/http/testing';
import { Response, ResponseOptions } from '@angular/http';
import { MockModel } from './mock.model';
import { UserController } from "./controllers/user.controller";

@Injectable()
export class MockBackendService {
	public mockControllers: MockModel[];

	constructor(
		private accountController: AccountController,
		private userController: UserController,
		private infoController: InfoController) {
		this.init();
	}

	init() {
		this.mockControllers = [];
		this.mockControllers.push(new MockModel('/mock/signup', 'accountController', this.accountController.signUp));
		this.mockControllers.push(new MockModel('/mock/signin', 'accountController', this.accountController.signIn));
		this.mockControllers.push(new MockModel('/mock/userlist', 'userController', this.userController.getAll));
		this.mockControllers.push(new MockModel('mock/languages', 'infoController', this.infoController.getLanguages));
	}

	hasController(url: string): MockModel {
		let model = null;
		for (var i = 0; i < this.mockControllers.length; i++) {
			if (url.indexOf(this.mockControllers[i].url) >= 0) {
				model = this.mockControllers[i];
				break;
			}
		}
		return model;
	}

	getMockedDatas(model: MockModel, connection: MockConnection) {
		let response = null;
		switch (connection.request.method) {
			case 0: {
				response = model.action.call(this[model.controller]);
				break;
			}
			case 1: {
				response = model.action.call(this[model.controller], connection.request.getBody());
				break;
			}
		}
		if (response !== 'error') {
			setTimeout(() => {
				connection.mockRespond(new Response(new ResponseOptions({
					status: 200,
					body: JSON.stringify(response)
				})));
			}, 200);
		}
	}
}