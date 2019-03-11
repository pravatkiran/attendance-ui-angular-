import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-office-location',
  templateUrl: './office-location.component.html',
  styleUrls: ['./office-location.component.css']
})
export class OfficelocationComponent implements OnInit {

  officeLocation: OfficeLocation[];
 
  isUpdate: boolean = false;

  private officeLocationObservable$ = new BehaviorSubject<OfficeLocation>({});
  officeLocation$ = this.officeLocationObservable$.asObservable();
  ngOnInit() {
  }

  updateOfficeLocation(officeLocation){
    this.isUpdate=true;
    this.officeLocationObservable$.next(officeLocation);
  }

}
