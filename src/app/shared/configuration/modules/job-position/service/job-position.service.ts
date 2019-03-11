import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobPositionService {

  constructor(private http: HttpClient) { }

  postPosition(jobPosition: JobPosition){
    return this.http.post('http://localhost:4200/configuration/jobposition', jobPosition);
  }
  getPosition(){
    console.log("get method called from service ");
    return this.http.get('http://localhost:4200/configuration/jobposition');
  }

  updatePosition(jobPosition: JobPosition){
    return this.http.put('http://localhost:4200/configuration/jobposition', jobPosition);
  }

  removePosition(code){
    return this.http.delete(`http://localhost:4200/configuration/jobposition?code=${code}`);
  }
}
