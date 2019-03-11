import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-supervisor-view',
  templateUrl: './supervisor-view.component.html',
  styleUrls: ['./supervisor-view.component.css']
})
export class SupervisorviewComponent implements OnInit {

  supervisor_view: SupervisorView[]=[];

  supervisor_view_form: FormGroup= new FormGroup({
    department_code: new FormControl('', Validators.required),
    employee_code: new FormControl('', Validators.required),
    date_from: new FormControl('', Validators.required),
    date_to: new FormControl('', Validators.required),
    
  })
  constructor() { }

  ngOnInit() {
  }

}
