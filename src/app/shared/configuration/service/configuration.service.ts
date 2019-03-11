import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(
    private http: HttpClient
  ) { }
 
  // getDepartments(){
  //   return this.http.get('http://localhost:4200/configuration/department');
  // }

  //  createDepartment(department: Department){   
  //   console.log("Department", department); 
  //   return this.http.post('http://localhost:4200/configuration/department',department);
  // }

}