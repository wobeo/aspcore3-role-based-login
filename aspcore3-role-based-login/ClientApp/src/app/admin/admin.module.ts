import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageBlogsComponent } from './manage-blogs/manage-blogs.component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
import { ManagePagesComponent } from './manage-pages/manage-pages.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { UserModule } from '../users/user.module';

@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ManageUsersComponent,
    ManageBlogsComponent,
    ManageCategoriesComponent,
    ManagePagesComponent
  ],
  imports: [
    CommonModule,
    UserModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
