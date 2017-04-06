import { Injectable } from '@angular/core';
import { MainConfig } from './../../../../config/config';

@Injectable()
export class StorageService {
	private keyPrefix: string;

	constructor() {
		this.keyPrefix = MainConfig.projectName;
	}

	private _getKey(key: string): string {
		key = key.trim();
		if (key.length < 0) { return ''; }
		return `${this.keyPrefix}_${key}`;
	}

	public setItem(key: string, value: string): void {
		localStorage.setItem(this._getKey(key), value);
	}

	public getItem(key: string): string {
		return localStorage.getItem(this._getKey(key));
	}

	public removeItem(key: string): void {
		localStorage.removeItem(this._getKey(key));
	}
}
