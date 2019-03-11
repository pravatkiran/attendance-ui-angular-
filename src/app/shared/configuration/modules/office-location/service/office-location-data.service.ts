import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfficeLocationDataService {

  private updateObservable: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private update$ = this.updateObservable.asObservable();
  private officeLocationObservable: BehaviorSubject<OfficeLocation> = new BehaviorSubject<OfficeLocation>({});
  private data$ = this.officeLocationObservable.asObservable();

  constructor() { 
    this.updateObservable.next(false);
  }

  get isUpdate(){
    return this.update$;
  }

  setUpdate(status: boolean){
    this.updateObservable.next(status);
  }

  get officeLocation(){
    return this.data$;
  }

  setOfficeLocation(officeLocation: OfficeLocation){
    this.officeLocationObservable.next(officeLocation)
  };
}
