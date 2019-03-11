import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class AttendanceComponent implements OnInit {

  attendance_form: FormGroup= new FormGroup({
    user_code: new FormControl('', Validators.required),
    employee_code: new FormControl('', Validators.required),
    from: new FormControl(''),
    to_date: new FormControl(''),
    
  })

  constructor() { }

  ngOnInit() {
  }

}
