import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  constructor(
    private http: HttpClient
  ) { }

  postAccess(access: UserAccess){
    return this.http.post('http://localhost:4200/access', access);
  }
}
