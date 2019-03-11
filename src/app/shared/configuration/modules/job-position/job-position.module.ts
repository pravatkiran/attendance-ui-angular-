import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobpositionComponent } from './components/job-position.component';
import { JobpositionlistComponent } from './components/job-position-list/job-position-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { JobPositionFormComponent } from './components/job-position-form/job-position-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DataTablesModule
   
  ],
  declarations: [
    JobpositionComponent,
    JobpositionlistComponent,
    JobPositionFormComponent
  ],
  exports: [
    JobpositionComponent,
    JobpositionlistComponent,
    JobPositionFormComponent
  ]
})
export class JobPositionModule { }
