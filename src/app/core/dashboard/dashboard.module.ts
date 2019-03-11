import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AdminDashboardComponent,
    UserDashboardComponent
  ],
  exports: [
    AdminDashboardComponent,
    UserDashboardComponent
  ]
})
export class DashboardModule { }
