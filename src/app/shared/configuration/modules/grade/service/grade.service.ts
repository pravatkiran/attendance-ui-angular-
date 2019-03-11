import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  constructor(private http:HttpClient) { }

 
  postGrade(grade: Grade){
    return this.http.post('http://localhost:4200/configuration/grade', grade);
  }
  getGrade(){
    return this.http.get('http://localhost:4200/configuration/grade');
  }

  updateGrade(grade: Grade){
    return this.http.put('http://localhost:4200/configuration/grade', grade);
  }

  removeGrade(code){
    return this.http.delete(`http://localhost:4200/configuration/grade?code=${code}`);
  }
}
