import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent }
];

export const routing = RouterModule.forRoot(appRoutes);