import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';

export const authentificationRoutes: Routes = [{
	path: '',
	component: AuthentificationComponent,
	children: [
		{ path: 'sign-in', component: SignInComponent },
		{ path: 'sign-up', component: SignUpComponent }
	]
}];

export const appRoutingProviders: any[] = [];
export const authentificationRouting: ModuleWithProviders = RouterModule.forChild(authentificationRoutes);
