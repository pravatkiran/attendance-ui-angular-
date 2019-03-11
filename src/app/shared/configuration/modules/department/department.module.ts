import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from './components/department.component';
import { DepartmentlistComponent } from './components/department-list/department-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentFormComponent } from './components/department-form/department-form.component';
import { DepartmentDataService } from './service/department-data.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DataTablesModule,
    HttpClientModule,
  ],
  declarations: [
    DepartmentComponent,
    DepartmentlistComponent,
    DepartmentFormComponent
  ],
  exports: [
    DepartmentComponent,
    DepartmentlistComponent,
    DepartmentFormComponent
  ],
  providers: [
    DepartmentDataService
  ]
})
export class DepartmentModule { }
