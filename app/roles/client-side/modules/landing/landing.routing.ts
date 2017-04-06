import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';

export const landingRoutes: Routes = [{
	path: '',
	component: LandingComponent
}];

export const appRoutingProviders: any[] = [];
export const landingRouting: ModuleWithProviders = RouterModule.forChild(landingRoutes);
