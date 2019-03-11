import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {

  grade: Grade[]= [];

  isUpdate: boolean = false;

  private gradeObservalbe$ = new BehaviorSubject<Grade>({});
  grade$ = this.gradeObservalbe$.asObservable();

  ngOnInit() {
  }

  updateGrade(grade){
    this.isUpdate=true;
    this.gradeObservalbe$.next(grade);
  }
 

}
