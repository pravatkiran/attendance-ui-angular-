import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradeComponent } from './components/grade.component';
import { GradelistComponent } from './components/grade-list/grade-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { GradeFormComponent } from './components/grade-form/grade-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DataTablesModule,
    HttpClientModule
  ],
  declarations: [
    GradeComponent,
    GradelistComponent,
    GradeFormComponent
  ],
  exports: [
    GradeComponent,
    GradeFormComponent,
    GradelistComponent
  ]
})
export class GradeModule { }
