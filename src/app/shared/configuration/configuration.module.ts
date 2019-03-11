import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { ReactiveFormsModule } from '@angular/forms';
import { DepartmentModule } from './modules/department/department.module';
import { DivisionModule } from './modules/division/division.module';
import { GradeModule } from './modules/grade/grade.module';
import { JobPositionModule } from './modules/job-position/job-position.module';
import { JobTitleModule } from './modules/job-title/job-title.module';
import { JobTypeModule } from './modules/job-type/job-type.module';
import { OfficeLocationModule } from './modules/office-location/office-location.module';
import { JustifyComponent } from './components/justify/justify.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    DataTablesModule,
    ReactiveFormsModule,
    DepartmentModule,
    DivisionModule,
    GradeModule,
    JobPositionModule,
    JobTitleModule,
    JobTypeModule,
    OfficeLocationModule,
    HttpClientModule,

  ],
  declarations: [
   
    JustifyComponent

  ],
  exports: [
   
    JustifyComponent

  ],
 
})
export class ConfigurationModule { }
