import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserAddComponent } from './user-add.component';
import { UserEditComponent } from './user-edit.component';
import { UserViewComponent } from './user-view.component';
import { UserListComponent } from './user-list.component';

const userRoutes: Routes = [
    {
    path: 'user',
        children: [
            { path: 'all', component: UserListComponent },
            { path: 'add', component: UserAddComponent },
            { path: 'edit/:id', component: UserEditComponent },
            { path: ':id', component: UserViewComponent },
        ], 
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
