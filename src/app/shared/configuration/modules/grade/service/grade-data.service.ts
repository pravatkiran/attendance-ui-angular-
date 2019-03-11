import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradeDataService {
  private updateObservable: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private update$= this.updateObservable.asObservable();
  private gradeObservable: BehaviorSubject<Grade> = new BehaviorSubject<Grade>({});
  private data$ = this.gradeObservable.asObservable();

  constructor() { 
    this.updateObservable.next(false);
  }

  get isUpdate(){
    return this.update$;
  }

  setUpdate(status: boolean){
    this.updateObservable.next(status);
  }

  get grade(){
    return this.data$;
  }

  setGrade(grade: Grade){
    this.gradeObservable.next(grade);
  }
}
