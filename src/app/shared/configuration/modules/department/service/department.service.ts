import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  department_list: Department[];
  constructor(
    private http: HttpClient
  ) { }

  postDepartment(department_list){   
    // console.log("Department", department_list); 
    return this.http.post('http://localhost:4200/configuration/department', department_list);
  }

  getDepartments(){
    return this.http.get('http://localhost:4200/configuration/department');
  }

  updateDepartment(department: Department){
    // console.log('update department from service ');
    return this.http.put('http://localhost:4200/configuration/department', department);
  }
  
  removeDepartment(code){
    return this.http.delete(`http://localhost:4200/configuration/department?code=${code}`);    
  }
  
  saveFile(department_file: Department){
    return this.http.post('http://localhost:4200/configuration/department', department_file);
  }
}
