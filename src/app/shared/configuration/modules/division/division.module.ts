import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DivisionComponent } from './components/division.component';
import { DivisionlistComponent } from './components/division-list/division-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { DivisionFormComponent } from './components/division-form/division-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DataTablesModule,
    HttpClientModule
  ],
  declarations: [
    DivisionComponent,
    DivisionlistComponent,
    DivisionFormComponent
  ],
  exports: [
    DivisionComponent,
    DivisionlistComponent,
    DivisionFormComponent
  ]
})
export class DivisionModule { }
