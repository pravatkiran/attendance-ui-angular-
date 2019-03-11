import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../service/user.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserinfoComponent implements OnInit {

  users: UserInfo[]=[];

  // @Input('saveBtn') saveButton: HTMLElement;
  // @Input('closeBtn') closeButton: HTMLElement;

  formpersonal: FormGroup = new FormGroup({
    user_code: new FormControl('', Validators.required),
    first_name : new FormControl('',Validators.required),
    middle_name : new FormControl(),
    last_name : new FormControl('',Validators.required),
    house_number: new FormControl(''),
    street: new FormControl(''),
    ward: new FormControl (''),
    municipality: new FormControl (''),
    district: new FormControl(''),
    province: new FormControl (''),
    country: new FormControl(''),
    phone: new FormControl(''),
    mobile: new FormControl(''),
    home_phone: new FormControl(''),
    email: new FormControl('')


  })

  

  constructor(
    private userService: UserService
  ) { }

  saveUserInfo(userInfo: UserInfo){
    this.userService.postUserInfo(this.formpersonal.value)
            .subscribe(
              userInfo=> console.log("Success!", userInfo),
              error=> console.error("Error!", error)
            );
            this.formpersonal.reset();
  }

  ngOnInit() {
  }

    


}
