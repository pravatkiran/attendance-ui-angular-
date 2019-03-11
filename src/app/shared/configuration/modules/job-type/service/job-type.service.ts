import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobTypeService {

  constructor(private http: HttpClient) { }

  postJobType(jobType: JobType){
    return this.http.post('http://localhost:4200/configuration/jobtype', jobType);
  }

  getJobType(){
    return this.http.get('http://localhost:4200/configuration/jobtype');
  }

  updateType(jobType: JobType){
    return this.http.put('http://localhost:4200/configuration/jobtype', jobType);
  }

  removeType(code){
    return this.http.delete(`http://localhost:4200/configuration/jobtype?code=${code}`);
  }
}
