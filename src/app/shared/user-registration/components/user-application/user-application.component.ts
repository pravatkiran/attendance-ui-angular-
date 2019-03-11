import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-application',
  templateUrl: './user-application.component.html',
  styleUrls: ['./user-application.component.css']
})
export class UserapplicationComponent implements OnInit {
  selectedFile = null;

  user_application : UserApplication [ ] = [];

  user_application_form: FormGroup= new FormGroup({
    apply_date: new FormControl ('', Validators.required),
    subject: new FormControl ('', Validators.required),
    leave_type: new FormControl ('', Validators.required),
    start_date: new FormControl('', Validators.required),
    end_date: new FormControl('', Validators.required),
    application_file: new FormControl('')
  });

  constructor() { }

  saveUserApplication(){
    setTimeout(()=>{
    console.log(this.user_application_form.value);
    this.user_application_form.reset()
    },2000)
  }

  ngOnInit() {
  }

  onFileChange(event){
    this.selectedFile = <File>event.target.files[0];
  }
}
