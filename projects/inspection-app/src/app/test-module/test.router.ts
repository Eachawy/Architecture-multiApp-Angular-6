import { Routes } from '@angular/router';
import { rootComponent } from './root';
import { test_1Component } from "./test_1/test_1.component";
import { test_2Component } from "./test_2/test_2.component";
import { AuthguardGuard } from "../../../../../lib/common/auth/authguard.guard";


export const testRoute: Routes = [
    {
        path: '',
        //canActivateChild: [AuthguardGuard],
        component: rootComponent,
        // data: {
        //     breadcrumb: 'test'
        // },
        children: [
            {
                path: 'test_1',
                component: test_1Component,
                data: {
                    authorities: [],
                    pageTitle: "Despatch.title",
                    breadcrumb:"test 1"
                }
            },
            {
                path: 'test_2',
                component: test_2Component,
                data: {
                    authorities: [],
                    pageTitle: "payment.title",
                    breadcrumb: "test 2"
                }
            }
        ]
    }
];