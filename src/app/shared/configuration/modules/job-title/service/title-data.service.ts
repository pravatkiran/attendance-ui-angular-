import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleDataService {
  private updateObservable: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private update$ = this.updateObservable.asObservable();
  private titleObservable: BehaviorSubject<JobTitle> = new BehaviorSubject<JobTitle>({});
  private data$= this.titleObservable.asObservable();

  constructor() {
    this.updateObservable.next(false);
   }

   get isUpdate(){
     return this.update$;
   }

   setUpdate(status: boolean){
     this.updateObservable.next(status);
   }

   get jobTitle(){
     return this.data$;
   }

   setTitle(jobTitle: JobTitle){
     this.titleObservable.next(jobTitle);
   }
}
