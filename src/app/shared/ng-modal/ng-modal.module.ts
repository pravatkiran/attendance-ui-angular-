import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { ConfigurationModule } from '../configuration/configuration.module';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    // ConfigurationModule,
    NgbModule
   
  ],
  declarations: [
    ModalComponent,

  ],
  exports: [
    ModalComponent,
  ]
})
export class NgModalModule { }
