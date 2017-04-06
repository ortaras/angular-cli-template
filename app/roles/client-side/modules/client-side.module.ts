import { HttpService } from './../shared/services/http.service';
import { LayoutModule } from './../shared/components/layout/layout.module';
import { AuthentificationModule } from './authentification/authentification.module';
import { LandingModule } from './landing/landing.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ClientGlobalsOperationService } from './../shared/client-globals/client-globals-operation.service';
import { ClientGlobals } from './../shared/client-globals/client-globals';
import { ClientSideComponent } from './client-side.component';
import { StorageService } from './../shared/services/storage.service';
import { PopupsModule } from "../shared/components/popups/popups.module";
import { UserModule } from "./user/user.module";
import { IsLoggedIn } from "../shared/guards/is-logged-in";
import { LocalizationModule } from "../shared/localization/localization.module";
import { InterceptModule } from './../shared/interceptor/intercept.module';

@NgModule({
	imports: [
		BrowserModule,
		RouterModule,
		CommonModule,
		LandingModule,
		LayoutModule,
		PopupsModule,
		AuthentificationModule,
		InterceptModule,
		UserModule,
		LocalizationModule
	],
	declarations: [
		ClientSideComponent
	],
	providers: [
		ClientGlobals,
		ClientGlobalsOperationService,
		StorageService,
		HttpService,
		IsLoggedIn
	]
})
export class ClientSideModule { }
