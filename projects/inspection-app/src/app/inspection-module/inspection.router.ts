import { Routes } from '@angular/router';
import { despatchComponent } from './despatch/despatch.component';
import { paymentComponent } from './payment/payment.component';
import { inspectionComponent } from './inspection/inspection.component';
import { rootComponent } from './root';
import { AuthguardGuard } from "../../../../../lib/common/auth/authguard.guard";


export const inspectionRoute: Routes = [
    {
        path: '',
        canActivateChild: [AuthguardGuard],
        component: rootComponent,
        // data: {
        //     breadcrumb: 'inspection'
        // },
        children: [
            {
                path: 'despatch',
                component: despatchComponent,
                data: {
                    authorities: [],
                    pageTitle: "Despatch.title",
                    breadcrumb: "Despatch"
                }
            },
            {
                path: 'payment',
                component: paymentComponent,
                data: {
                    authorities: [],
                    pageTitle: "payment.title",
                    breadcrumb: "payment"
                }
            },
            {
                path: 'inspection',
                component: inspectionComponent,
                data: {
                    authorities: [],
                    pageTitle: "inspection.title",
                    breadcrumb: "inspection"
                }
            }
        ]
    }
];