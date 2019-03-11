import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobPositionDataService {

  private updateObservable: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private update$ = this.updateObservable.asObservable();
  private jobPositionObservable: BehaviorSubject<JobPosition> = new BehaviorSubject<JobPosition>({});
  private data$ = this.jobPositionObservable.asObservable();
 
  constructor() { 
   this.updateObservable.next(false);
  }

  get isUpdate(){
    return this.update$;
  }

  setUpdate(status: boolean){
   this.updateObservable.next(status);
  }

  get jobPosition(){
    return this.data$;
  }

  setJobPosition(jobPosition: JobPosition){
    this.jobPositionObservable.next(jobPosition);
  }
 
}
