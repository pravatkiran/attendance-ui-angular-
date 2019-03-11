import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfficeLocationService {

  constructor(private http: HttpClient) { }

  postOfficeLocation(officeLocation: OfficeLocation){
    return this.http.post('http://localhost:4200/configuration/officelocation', officeLocation);
  }

  getOfficeLocation(){
    return this.http.get('http://localhost:4200/configuration/officelocation');
  }

  updateOfficeLocation(officeLocation: OfficeLocation){
    return this.http.put('http://localhost:4200/configuration/officelocation', officeLocation);
  }

  removeOfficeLocation(code){
    return this.http.delete(`http://localhost:4200/configuration/officelocation?code=${code}`);
  }
}
