import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobtitleComponent } from './components/job-title.component';
import { JobtitlelistComponent } from './components/job-title-list/job-title-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { JobTitleFormComponent } from './components/job-title-form/job-title-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  declarations: [
    JobtitleComponent,
    JobtitlelistComponent,
    JobTitleFormComponent
  ],
  exports: [
    JobtitleComponent,
    JobTitleFormComponent,
    JobtitlelistComponent
  ]
})
export class JobTitleModule { }
