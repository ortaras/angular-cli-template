import { AuthentificationHttpService } from './../authentification-shared/authentification-http.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SignUpModel } from './sign-up-shared/sign-up.model';
import { KeyValueModel } from './../../../shared/models/key-value.model';
import { SignupValidator } from './sign-up-shared/sign-up.validator';

@Component({
	moduleId: module.id,
	selector: 'sign-up',
	templateUrl: 'sign-up.component.html',
	styleUrls: ['sign-up.component.css']
})

export class SignUpComponent {
	public model: SignUpModel;
	public validator: SignupValidator;

	constructor(private _httpService: AuthentificationHttpService, private _router: Router) {
		this.model = new SignUpModel();
		this.validator = new SignupValidator(this.model);
	}

	submitForm(event) {
		event.preventDefault();
		this.validator.submit();
		if (!this.validator.isFormValid()) { return; }
		this._httpService.signup(this.model)
			.subscribe(() => {
				this._router.navigate(['/sign-in']);
			});
	}
}
