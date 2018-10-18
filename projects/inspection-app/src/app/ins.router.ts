import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { noAccessComponent } from '../../../../lib/general/no_access/noAccess.component';
import { notFoundPageComponent } from '../../../../lib/general/notFoundPage/notFoundPage.component';

import { AuthguardGuard } from '../../../../lib/common/auth/authguard.guard';





const applicationRout: Routes = [
    // {
    //     path: '',
    //     component: loginComponent
    // },
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
    },
    {
        path: 'welcome',
        //canActivate: [AuthguardGuard],
        loadChildren: './welcome/welcome.module#CisWelcomeModule'
    },
    {
        path: 'inspection',
        loadChildren: './inspection-module/inspection.module#inspectionModule'
    },
    {
        path: 'test',
        loadChildren: './test-module/test.module#testModule'
    },
    {
        path: 'no-access',
        component: noAccessComponent
    },
    {
        path: '**',
        component: notFoundPageComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            applicationRout, { useHash: true, preloadingStrategy: PreloadAllModules }
        )
    ],
    exports: [RouterModule]
})

export class InsRoutingModule { }

















// export const inspectionRoute: Routes = [
//     {
//         path: 'login',
//         component: loginComponent
//     },
//     {
//         path: '',
//         canActivate: [AuthguardGuard],
//         redirectTo: 'despatch',
//         pathMatch: 'full'
//     },
//     {
//         path: '',
//         canActivateChild: [AuthguardGuard],
//         component: rootComponent,
//         // data: {
//         //     breadcrumb: 'inspection'
//         // },
//         children: [
//             {
//                 path: 'despatch',
//                 component: despatchComponent,
//                 data: {
//                     authorities: [],
//                     pageTitle: "Despatch.title",
//                     breadcrumb: "Despatch"
//                 }
//             },
//             {
//                 path: 'payment',
//                 component: paymentComponent,
//                 data: {
//                     authorities: [],
//                     pageTitle: "payment.title",
//                     breadcrumb: "payment"
//                 }
//             },
//             {
//                 path: 'inspection',
//                 component: inspectionComponent,
//                 data: {
//                     authorities: [],
//                     pageTitle: "inspection.title",
//                     breadcrumb: "inspection"
//                 }
//             }
//         ]
//     },
//     {
//         path: 'no-access',
//         component: noAccessComponent
//     },
//     {
//         path: '**',
//         component: notFoundPageComponent
//     }

// ];



// export const inspectionRoute: Routes = [
//     {
//         path: '',
//         //canActivateChild: [AuthguardGuard],
//         component: rootComponent,
//         // data: {
//         //     breadcrumb: 'inspection'
//         // },
//         children: [
//             {
//                 path: 'despatch',
//                 component: despatchComponent,
//                 data: {
//                     authorities: [],
//                     pageTitle: "Despatch.title",
//                     breadcrumb: "Despatch"
//                 }
//             },
//             {
//                 path: 'payment',
//                 component: paymentComponent,
//                 data: {
//                     authorities: [],
//                     pageTitle: "payment.title",
//                     breadcrumb: "payment"
//                 }
//             },
//             {
//                 path: 'inspection',
//                 component: inspectionComponent,
//                 data: {
//                     authorities: [],
//                     pageTitle: "inspection.title",
//                     breadcrumb: "inspection"
//                 }
//             }
//         ]
//     }
// ];


// {
//     path: 'logout',
//         component: loginComponent
// },
// {
//     path: '',
//         canActivate: [AuthguardGuard],
//             redirectTo: '/despatch',
//                 pathMatch: 'full'
// },
// {
//     path: 'despatch',
//         canActivate: [AuthguardGuard],
//             component: despatchComponent,
//                 data: {
//         authorities: [],
//             pageTitle: "Despatch.title",
//                 breadcrumb: "Despatch"
//     }
// },
// {
//     path: 'payment',
//         canActivate: [AuthguardGuard],
//             component: paymentComponent,
//                 data: {
//         authorities: [],
//             pageTitle: "payment.title",
//                 breadcrumb: "payment"
//     }
// },
// {
//     path: 'inspection',
//         canActivate: [AuthguardGuard],
//             component: inspectionComponent,
//                 data: {
//         authorities: [],
//             pageTitle: "inspection.title",
//                 breadcrumb: "inspection"
//     }
// },
// {
//     path: 'no-access',
//         component: noAccessComponent
// },
// {
//     path: '**',
//         component: notFoundPageComponent
// }