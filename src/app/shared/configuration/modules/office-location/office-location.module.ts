import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficelocationComponent } from './components/office-location.component';
import { OfficelocationlistComponent } from './components/office-location-list/office-location-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { OfficeLocationFormComponent } from './components/office-location-form/office-location-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  declarations: [
    OfficelocationComponent,
    OfficelocationlistComponent,
    OfficeLocationFormComponent
  ],
  exports: [
    OfficelocationComponent,
    OfficeLocationFormComponent,
    OfficelocationlistComponent
  ]
})
export class OfficeLocationModule { }
