import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobtypeComponent } from './components/job-type.component';
import { JobtypelistComponent } from './components/job-type-list/job-type-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { JobTypeFormComponent } from './components/job-type-form/job-type-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  declarations: [
    JobtypeComponent,
    JobtypelistComponent,
    JobTypeFormComponent
  ],
  exports: [
    JobtypeComponent,
    JobTypeFormComponent,
    JobtypelistComponent
  ]
})
export class JobTypeModule { }
