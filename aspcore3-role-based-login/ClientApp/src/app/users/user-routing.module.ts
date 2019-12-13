import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user-list.component';
import { UserAddComponent } from './user-add.component';
import { UserEditComponent } from './user-edit.component';
import { UserViewComponent } from './user-view.component';

const userRoutes: Routes = [
    {
        path: 'user',
        children: [
            { path: 'all', component: UserListComponent },
            { path: 'add', component: UserAddComponent },
            { path: 'edit/:id', component: UserEditComponent },
            { path: ':id', component: UserViewComponent },
        ], // path enfants qu'on peut acceder (ou pas) selon la securité
    }

];

@NgModule({
    imports: [
        RouterModule.forChild(userRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class UserRoutingModule { }
