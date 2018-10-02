import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar.component';

export const navbarRoute: Routes = [
    {
        path: '',
        component: NavbarComponent,
        outlet: 'navbar'
    }
];