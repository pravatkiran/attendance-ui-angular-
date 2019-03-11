import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-access',
  templateUrl: './user-access.component.html',
  styleUrls: ['./user-access.component.css']
})
export class UseraccessComponent implements OnInit {

  user_access: UserAccess[]=[];

  user_access_form: FormGroup= new FormGroup ({
    username: new FormControl ('', Validators.required),
    password: new FormControl ('', Validators.required),
    rfid: new FormControl ('', Validators.required),
    pin: new FormControl ('', Validators.required),
    security_code: new FormControl ('', Validators.required),
    public_key: new FormControl ('', Validators.required),
    private_key: new FormControl ('', Validators.required),
    checkbox1: new FormControl(''),
    checkbox2: new FormControl(''),
    checkbox3: new FormControl('')
  });


  constructor() { }

  saveUserAccess(){
    setTimeout(()=>{
      console.log(this.user_access_form.value);
      this.user_access_form.reset();
    },2000);
  }
  ngOnInit() {
  }

}
