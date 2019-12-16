import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { AuthService } from './auth/auth.service';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'users', redirectTo: 'user/all', pathMatch: 'full' },
    //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService],
})

export class AppRoutingModule { }
