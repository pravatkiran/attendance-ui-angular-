import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  
  
  isUpdate:boolean =  false;

  private departmentObservable$ = new BehaviorSubject<Department>({});
  department$ = this.departmentObservable$.asObservable();
  
  ngOnInit(): void {
    
 }
 
  updateDepartment(department){
    this.isUpdate = true;
    this.departmentObservable$.next(department);
  }

}
