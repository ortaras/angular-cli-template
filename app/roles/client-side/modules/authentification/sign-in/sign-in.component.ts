import { UserModel } from './../../../shared/models/user.model';
import { SuccessPopupModel } from './../../../shared/components/popups/success-popup/success-popup-shared/success-popup.model';
import { PopupsService } from './../../../shared/components/popups/popups-shared/popups.service';
import { ClientGlobals } from './../../../shared/client-globals/client-globals';
import { StorageService } from './../../../shared/services/storage.service';
import { Router } from '@angular/router';
import { AuthentificationHttpService } from './../authentification-shared/authentification-http.service';
import { SigninValidator } from './sign-in-shared/sign-in.validator';
import { SignInModel } from './sign-in-shared/sign-in.model';
import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'sign-in',
	templateUrl: 'sign-in.component.html',
	styleUrls: ['sign-in.component.css']
})

export class SignInComponent {
	public model: SignInModel;
	public validator: SigninValidator;

	constructor(private _httpService: AuthentificationHttpService, private _router: Router,
		private _popupService: PopupsService, private _globals: ClientGlobals, private _storage: StorageService) {
		this.model = new SignInModel();
		this.validator = new SigninValidator(this.model);
	}

	submitForm(event) {
		event.preventDefault();
		this.validator.submit();
		if (!this.validator.isFormValid()) { return; }
		this._httpService.signin(this.model)
			.subscribe(res => {
				this._popupService.open(new SuccessPopupModel('Success'));
				let user = UserModel.fromJSON(res);
				this._storage.setItem('user', JSON.stringify(user));
				this._globals.user.next(user);
				this._router.navigate(['/user-list']);
			});
	}
}
