import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserService } from './user.service';
import { UserListComponent } from './user-list.component';
import { UserAddComponent } from './user-add.component';
import { UserEditComponent } from './user-edit.component';
import { UserViewComponent } from './user-view.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AuthService } from '../auth/auth.service';

@NgModule({
    declarations: [
        UserListComponent,
        UserAddComponent,
        UserEditComponent,
        UserViewComponent,
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        Ng2SearchPipeModule
    ],
    exports: [
      UserRoutingModule,
      UserListComponent,
      UserAddComponent,
      UserEditComponent,
      UserViewComponent
    ],
    providers: [
      AuthService,
      UserService,
    ]
})

export class UserModule { }
