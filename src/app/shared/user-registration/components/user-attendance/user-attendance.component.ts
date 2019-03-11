import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-attendance',
  templateUrl: './user-attendance.component.html',
  styleUrls: ['./user-attendance.component.css']
})
export class UserattendanceComponent implements OnInit {

  user_attendance: UserAttendance[]=[];

  user_attendance_form: FormGroup= new FormGroup({
    from: new FormControl('', Validators.required),
    to_date: new FormControl('', Validators.required)
  });

  constructor() { }

  
  ngOnInit() {
  }

}
