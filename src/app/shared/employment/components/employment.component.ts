import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmploymentService } from '../service/employment.service';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class EmploymentComponent implements OnInit {

  employment: Employment[]=[];

  employment_form: FormGroup= new FormGroup({
    employee_code: new FormControl('', Validators.required),
    user_code: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required),
    job_position: new FormControl('', Validators.required),
    job_title: new FormControl('', Validators.required),
    job_type: new FormControl('', Validators.required),
    office_location: new FormControl('', Validators.required),
    division: new FormControl('', Validators.required),
    grade: new FormControl('', Validators.required),
    
  });
  constructor(
    private employmentService: EmploymentService
  ) { }

  saveEmployment(employment: Employment){
    this.employmentService.createEmployment(this.employment_form.value)
          .subscribe(
            data=> console.log("Success!", data),
            error=> console.error("Error!", error)
          );

          this.employment_form.reset();
  }

  ngOnInit() {
  }

}
