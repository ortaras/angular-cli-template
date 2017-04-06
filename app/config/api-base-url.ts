import { Environments } from "./enums/environments.enum";

export class ApiBaseUrl {
	static url(env): string {
		switch (env) {
			case Environments.production: {
				return 'http://artygeek.net/api/';
			}
			case Environments.staiging: {
				return 'http://artygeek.net/api/';
			}
			case Environments.test: {
				return 'http://artygeek.net/api/';
			}
		}
	}
}
