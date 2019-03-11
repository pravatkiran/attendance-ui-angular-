import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-justification',
  templateUrl: './user-justification.component.html',
  styleUrls: ['./user-justification.component.css']
})
export class UserjustificationComponent implements OnInit {

  userJustification: Justification[] = [];

  justification_form: FormGroup= new FormGroup({
    user_code: new FormControl('', Validators.required),
    remarks: new FormControl('', Validators.required),
    justification: new FormControl('', Validators.required),
    justification_file: new FormControl('', Validators.required)
  })

  constructor(
    private justificationService : UserService
  ) { }

  ngOnInit() {
  }

  saveJustification(){
    this.justificationService.postUserJustification(this.justification_form.value)
              .subscribe(res=>{
                console.log(res)
              });
    this.justification_form.reset();
    console.log(this.justification_form.value);
  }

}
