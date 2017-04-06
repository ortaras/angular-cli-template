import { ApiBaseUrl } from './api-base-url';
import { ApiRequestUrls } from './../roles/client-side/config/api-request-urls';
import { Environments } from "./enums/environments.enum";

export class MainConfig {
	static env = Environments.staiging;
	static apiUrl = ApiBaseUrl.url(MainConfig.env);
	static urls = ApiRequestUrls.urls;
	static projectName = 'Angular2Template';
	static defaultLanguage = 'ua';
}
