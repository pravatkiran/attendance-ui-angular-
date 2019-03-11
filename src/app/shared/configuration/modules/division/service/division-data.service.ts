import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DivisionDataService {
  private updateObservable: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private update$ = this.updateObservable.asObservable();
  private divisionObservable: BehaviorSubject<Division> = new BehaviorSubject<Division>({});
  private data$ = this.divisionObservable.asObservable();

  constructor() {
    this.updateObservable.next(false);
   }
   get isUpdate(){
     return this.update$;
   }
   setUpdate(status: boolean){
     this.updateObservable.next(status);
   }
   get division(){
     return this.data$
   }
   setDivision(division: Division){
     this.divisionObservable.next(division);
   }
}
