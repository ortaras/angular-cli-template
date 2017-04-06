import { HttpModule } from '@angular/http';
import { InterceptModule } from './../../shared/interceptor/intercept.module';
import { ControlsModule } from './../../shared/components/controls/controls.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthentificationComponent } from './authentification.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthentificationHttpService } from './authentification-shared/authentification-http.service';
import { LocalizationModule } from "../../shared/localization/localization.module";

@NgModule({
	imports: [
		BrowserModule,
		RouterModule,
		CommonModule,
		FormsModule,
		ControlsModule,
		LocalizationModule
	],
	declarations: [
		AuthentificationComponent,
		SignInComponent,
		SignUpComponent
	],
	providers: [
		AuthentificationHttpService
	]
})
export class AuthentificationModule { }
