import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {

  division: Division[]=[];

 isUpdate: boolean = false;

 private divisionObservable$ = new BehaviorSubject<Division>({});
 division$= this.divisionObservable$.asObservable();

  ngOnInit() {
   
  }
  

  updateDivision(division){
    this.isUpdate=true;
    this.divisionObservable$.next(division);
  }

}
