import { MockBackendService } from './mock-backend-interceptor/mock-backend.service';
import { InterceptorService } from './error-interceptor/interceptor.service';
import { Observable } from 'rxjs/Rx';
import { RequestOptions } from '@angular/http';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export let mockBackendProvider = {
	provide: Http,
	useFactory: (backend: MockBackend, options: BaseRequestOptions,
		realBackend: XHRBackend, interceptorService: InterceptorService,
		backendService: MockBackendService) => {
		backend.connections.subscribe((connection: MockConnection) => {
			let backendModel = backendService.hasController(connection.request.url);
			if (backendModel) {
				backendService.getMockedDatas(backendModel, connection);
			} else {
				let requestOptions = interceptorService.makeRequestOptions(connection.request);
				let realHttp = new Http(realBackend, requestOptions);
				switch (connection.request.method) {
					case 0:
						realHttp.get(connection.request.url, requestOptions)
							.catch((error, source) => {
								interceptorService.processErrors(error);
								connection.mockError(error);
								return Observable.throw(error);
							})
							.subscribe((response: Response) => {
								connection.mockRespond(response);
							});
						break;
					case 1:
						realHttp.post(connection.request.url, connection.request.getBody(), requestOptions)
							.catch((error, source) => {
								interceptorService.processErrors(error);
								connection.mockError(error);
								return Observable.throw(error);
							})
							.subscribe((response: Response) => {
								connection.mockRespond(response);
							});
						break;
					case 2:
						realHttp.put(connection.request.url, connection.request.getBody(), requestOptions)
							.catch((error, source) => {
								interceptorService.processErrors(error);
								connection.mockError(error);
								return Observable.throw(error);
							})
							.subscribe((response: Response) => {
								connection.mockRespond(response);
							});
						break;
					case 3:
						realHttp.delete(connection.request.url, requestOptions)
							.catch((error, source) => {
								interceptorService.processErrors(error);
								connection.mockError(error);
								return Observable.throw(error);
							})
							.subscribe((response: Response) => {
								connection.mockRespond(response);
							});
						break;
				}
			}
		});

		return new Http(backend, options);
	},
	deps: [MockBackend, BaseRequestOptions, XHRBackend, InterceptorService, MockBackendService]
};
