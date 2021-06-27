import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserAddComponent } from './user-add/user-add.component';

const routes: Routes = [
  {path: '', redirectTo: '/user-add', pathMatch: 'full'},
  {path: 'users', component: UsersComponent}, // Component là component mà router sẽ tạo khi điều hướng đến this route
  {path: 'user-add', component: UserAddComponent},
  {path: 'detail/:id', component: UserDetailComponent},

]; // Path là một chuỗi khớp với URL trong thanh địa chỉ trình duyệt

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
