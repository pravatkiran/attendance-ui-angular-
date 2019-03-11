import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobTitleService {

  constructor(private http: HttpClient) { }

  postJobTitle(jobTitle: JobTitle){
    return this.http.post('http://localhost:4200/configuration/jobtitle', jobTitle);
  }

  getJobTitle(){
    return this.http.get('http://localhost:4200/configuration/jobtitle');
  }

  updateTitle( jobTitle: JobTitle){
    return this.http.put('http://localhost:4200/configuration/jobtitle', jobTitle);
  }

  removeTitle(code){
    return this.http.delete(`http://localhost:4200/configuration/jobtitle?code=${code}`);
  }
}
