import { NgModule }   from '@angular/core';
import { RouterModule }   from '@angular/router';

import { HomeComponent } from './components/home/home.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', pathMatch: 'full', redirectTo: '/home'},
            {path: 'home', component: HomeComponent },
            // {path: 'dashboard', component: DashboardComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
