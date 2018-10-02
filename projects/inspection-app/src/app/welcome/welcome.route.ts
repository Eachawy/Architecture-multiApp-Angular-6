import { Route } from '@angular/router';
import { welcomeComponent } from './welcome.component';

export const Welcome_ROUTE: Route = {
    path: '',
    component: welcomeComponent,
    data: {
        authorities: [],
        pageTitle: "Welcome.TITLE",
        //breadcrumb: "Home"
    }
};
