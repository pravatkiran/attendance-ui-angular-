import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentModule } from '../configuration/modules/department/department.module';
import { DivisionModule } from '../configuration/modules/division/division.module';
import { GradeModule } from '../configuration/modules/grade/grade.module';
import { OfficeLocationModule } from '../configuration/modules/office-location/office-location.module';
import { JobTitleModule } from '../configuration/modules/job-title/job-title.module';
import { JobTypeModule } from '../configuration/modules/job-type/job-type.module';
import { JobPositionModule } from '../configuration/modules/job-position/job-position.module';
import { NgModalModule } from '../ng-modal/ng-modal.module';
import { EmploymentComponent } from './components/employment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    DepartmentModule,
    DivisionModule,
    GradeModule,
    OfficeLocationModule,
    JobPositionModule,
    JobTitleModule,
    JobTypeModule,
    NgModalModule,
    ReactiveFormsModule,
    DataTablesModule,
    HttpClientModule
  ],
  declarations: [
    EmploymentComponent
  ]
})
export class EmploymentModule { }
