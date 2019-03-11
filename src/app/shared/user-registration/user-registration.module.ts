import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './components/user/user.component';
import { UserjustificationComponent } from './components/user-justification/user-justification.component';
import { UseraccessComponent } from './components/user-access/user-access.component';
import { UserapplicationComponent } from './components/user-application/user-application.component';
import { UseremploymentComponent } from './components/user-employment/user-employment.component';
import { UserinfoComponent } from './components/user-info/user-info.component';
import { UserattendanceComponent } from './components/user-attendance/user-attendance.component';
import { NgModalModule } from '../ng-modal/ng-modal.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { GradeModule } from '../configuration/modules/grade/grade.module';
import { DivisionModule } from '../configuration/modules/division/division.module';
import { DepartmentModule } from '../configuration/modules/department/department.module';
import { JobPositionModule } from '../configuration/modules/job-position/job-position.module';
import { JobTitleModule } from '../configuration/modules/job-title/job-title.module';
import { JobTypeModule } from '../configuration/modules/job-type/job-type.module';
import { OfficeLocationModule } from '../configuration/modules/office-location/office-location.module';
import { ConfigurationModule } from '../configuration/configuration.module';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    NgModalModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GradeModule,
    DivisionModule,
    DepartmentModule,
    JobPositionModule,
    JobTitleModule,
    JobTypeModule,
    OfficeLocationModule,
    ConfigurationModule,
    DataTablesModule
    
  ],
  declarations: [
  UserComponent,
  UseraccessComponent,
  UserapplicationComponent,
  UserattendanceComponent,
  UseremploymentComponent,
  UserinfoComponent,
  UserjustificationComponent,
  ],
  exports: [
    UserComponent,
    UseraccessComponent,
    UserapplicationComponent,
    UserattendanceComponent,
    UseremploymentComponent,
    UserinfoComponent,
    UserjustificationComponent
  ]
})
export class UserRegistrationModule { }
