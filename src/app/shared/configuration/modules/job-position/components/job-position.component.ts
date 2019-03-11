import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-job-position',
  templateUrl: './job-position.component.html',
  styleUrls: ['./job-position.component.css']
})
export class JobpositionComponent implements OnInit {

  jobPosition: JobPosition[];

  isUpdate: boolean= false;

  private jobPositionObservable$ = new BehaviorSubject<JobPosition>({});
  jobPosition$= this.jobPositionObservable$.asObservable();
  
  ngOnInit() {
  }
 
  updateJobPosition(jobPosition){
    this.isUpdate = true;
    this.jobPositionObservable$.next(jobPosition);
  }
}
