import { Component, OnInit, Input } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../../service/user.service';
// import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-employment',
  templateUrl: './user-employment.component.html',
  styleUrls: ['./user-employment.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class UseremploymentComponent implements OnInit {
  user_employment: Employment [] =[];

  user_employment_form: FormGroup= new FormGroup({
    department: new FormControl ('', Validators.required),
    job_position: new FormControl ('', Validators.required),
    job_title: new FormControl ('',Validators.required),
    job_type: new FormControl('', Validators.required),
    office_location: new FormControl('', Validators.required),
    division: new FormControl('', Validators.required),
    grade: new FormControl ('', Validators.required),
   
  })

  // @Input('saveBtn') saveButton: HTMLElement;
  // @Input('closeBtn') closeButton: HTMLElement;

  constructor(
    private userService: UserService
  ) { }

  saveUserEmployment(){
    this.userService.postUserEmployment(this.user_employment_form.value)
          .subscribe(
            data=> console.log('Success!', data),
            error=> console.log("Error!", error)
          );
          console.log(this.user_employment_form.value);
          this.user_employment_form.reset();
  }
  ngOnInit() {
  }

}
