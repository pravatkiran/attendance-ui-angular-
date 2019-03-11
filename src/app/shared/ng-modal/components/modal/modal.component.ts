import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [NgbModal, NgbModalConfig]
})
export class ModalComponent implements OnInit {

  constructor(
    config: NgbModalConfig, private modalService: NgbModal
  ) { 
    config.backdrop='static';
    config.keyboard=false;
  }
  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  ngOnInit() {
  }

}
