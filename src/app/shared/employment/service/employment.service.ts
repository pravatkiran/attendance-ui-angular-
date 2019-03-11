import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmploymentService {

  constructor(
    private http: HttpClient
  ) { }

  createEmployment(employment: Employment){
    return this.http.post('http://localhost:4200/employment', employment);
  }
}
