import { HeaderHttpService } from './header-shared/header-http.service';
import { LocalizationService } from './../../../localization/localization-shared/localization.service';
import { UserModel } from './../../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { StorageService } from './../../../services/storage.service';
import { ClientGlobals } from './../../../client-globals/client-globals';
import { KeyValueModel } from './../../../models/key-value.model';
import { Router } from "@angular/router";

@Component({
	moduleId: module.id,
	selector: 'layout-header',
	styleUrls: ['header.component.css'],
	templateUrl: 'header.component.html',
	providers: [HeaderHttpService]
})

export class HeaderComponent implements OnInit {
	public languages: KeyValueModel[];
	public selectedLanguage: string;
	public user: UserModel;

	constructor(private _storage: StorageService, private _globals: ClientGlobals,
		private _router: Router, private _localization: LocalizationService, private _httpService: HeaderHttpService) {
		this._globals.uiLanguage.subscribe(lang => {
			this.selectedLanguage = lang;
			this._localization.setDefaultLang(this.selectedLanguage);
			this._localization.enableFallback(true);
		});

		this._globals.user.subscribe(user => {
			this.user = user;
		});
	}

	ngOnInit() {
		this.languages = [];
		this._httpService.getLanguages()
			.subscribe(languages => this.languages = KeyValueModel.fromJSONArray(languages));
	}

	onLanguageChange() {
		this._storage.setItem('lang', this.selectedLanguage);
		this._globals.uiLanguage.next(this.selectedLanguage);
	}

	logout() {
		this._storage.removeItem('user');
		this._globals.user.next(null);
		this._router.navigate(['/']);
	}
}
