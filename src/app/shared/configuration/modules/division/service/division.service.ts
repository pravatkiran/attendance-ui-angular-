import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  constructor(private http:HttpClient) { }

  postDivision(division_list:Division){
    // console.log("Divison service called");
   return this.http.post('http://localhost:4200/configuration/division', division_list);

  }
  getDivision(){
   return this.http.get<Division[]>(`/configuration/division`);
  }

  updateDivision(division: Division){
    return this.http.put('http://localhost:4200/configuration/division', division);
  }

 removeDivision(code){
   return this.http.delete(`http://localhost:4200/configuration/division?code=${code}`);
 }
 
 saveFile(division: Division){
   return this.http.post('http://localhost:4200/configuration/division', division)
 }
}