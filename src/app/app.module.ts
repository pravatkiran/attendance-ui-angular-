import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccessComponent } from './shared/access/components/access.component';
import { AttendanceComponent } from './shared/attendance/attendance.component';
import { SupervisorviewComponent } from './shared/supervisor-view/supervisor-view.component';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { ConfigurationModule } from './shared/configuration/configuration.module';
import { NgModalModule } from './shared/ng-modal/ng-modal.module';
import { UserRegistrationModule } from './shared/user-registration/user-registration.module';
import { ReactiveFormsModule } from '@angular/forms';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { NavbarComponent } from './core/navbar/navbar.component';
import { EmploymentModule } from './shared/employment/employment.module';
import { DashboardModule } from './core/dashboard/dashboard.module';



@NgModule({
  declarations: [
    AppComponent,
    AccessComponent,
    AttendanceComponent,
    SupervisorviewComponent,
    NavbarComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    ConfigurationModule,
    NgModalModule,
    UserRegistrationModule,
    ReactiveFormsModule,
    EmploymentModule,
    DashboardModule
  ],
  providers: [
   
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
