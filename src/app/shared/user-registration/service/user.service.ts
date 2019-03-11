import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserjustificationComponent } from '../components/user-justification/user-justification.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  postUserInfo(userInfo: UserInfo){
    return this.http.post('http://localhost:4200/user', userInfo);
  }

  postUserEmployment(userEmployment: Employment){
    return this.http.post('http://localhost:4200/user', userEmployment);
  }

  postUserJustification(userJustification: Justification){
    return this.http.post('http://localhost:4200/user', userJustification)
  }
}