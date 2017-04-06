import { Injectable } from '@angular/core';
import { StorageService } from './../../../services/storage.service';

@Injectable()
export class InfoController {
	constructor(private _storage: StorageService) { }

	getLanguages() {
		return [
			{ key: 'ua', value: 'Ukrainian' },
			{ key: 'en', value: 'English' }
		];
	}
}
