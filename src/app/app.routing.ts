import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent},
    { path: 'sobre', component: SobreNosComponent},
    { path: 'dados', component: PaymentDetailsComponent}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
