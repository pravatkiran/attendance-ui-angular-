import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeDataService {

  private updateObservable: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private update$= this.updateObservable.asObservable();
  private typeOsbervable: BehaviorSubject<JobType> = new BehaviorSubject<JobType>({});
  private data$ = this.typeOsbervable.asObservable();

  constructor() { 
    this.updateObservable.next(false);
  }

  get isUpdate(){
    return this.update$;
  }

  setUpdate(status: boolean){
    this.updateObservable.next(status);
  }

  get type(){
    return this.data$;
  }

  setType(jobType: JobType){
    this.typeOsbervable.next(jobType);
  }
}
