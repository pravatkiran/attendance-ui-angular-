import { Component, OnInit } from '@angular/core';
// import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // users: User[]=[];
  constructor() { }

  ngOnInit() {
  }

  // saveUserInfo(event){
  //   console.log("user info from parent",event);
  // }

}
