import { InfoController } from './mock-backend-interceptor/controllers/info.controller';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { mockBackendProvider } from './interceptor.provider';
import { InterceptorService } from './error-interceptor/interceptor.service';
import { MockBackendService } from './mock-backend-interceptor/mock-backend.service';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions, HttpModule } from '@angular/http';
import { AccountController } from './mock-backend-interceptor/controllers/account.controller';
import { UserController } from "./mock-backend-interceptor/controllers/user.controller";


@NgModule({
	imports: [
		BrowserModule,
		RouterModule,
		CommonModule,
		HttpModule
	],
	declarations: [
	],
	providers: [
		mockBackendProvider,
		InterceptorService,
		MockBackendService,
		MockBackend,
		BaseRequestOptions,
		AccountController,
		UserController,
		InfoController
	]
})
export class InterceptModule { }
