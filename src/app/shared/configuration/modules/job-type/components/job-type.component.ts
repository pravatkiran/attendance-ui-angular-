import { Component, OnInit } from '@angular/core';
import { JobTypeService } from '../service/job-type.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-job-type',
  templateUrl: './job-type.component.html',
  styleUrls: ['./job-type.component.css']
})
export class JobtypeComponent implements OnInit {

  jobType: JobType[];

  isUpdate: boolean= false;
  
  private typeObservable$ = new BehaviorSubject<JobType>({});
  type$= this.typeObservable$.asObservable();

  ngOnInit() {
  }

  updateType(type){
    this.isUpdate= true;
    this.typeObservable$.next(type);
  }

}
