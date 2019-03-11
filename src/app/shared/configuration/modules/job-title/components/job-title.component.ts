import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JobTitleService } from '../service/job-title.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-job-title',
  templateUrl: './job-title.component.html',
  styleUrls: ['./job-title.component.css']
})
export class JobtitleComponent implements OnInit {

  jobTitle: JobTitle[];

  isUpdate: boolean = false;
 
  private titleObservable$ = new BehaviorSubject<JobTitle>({});
  title$ = this.titleObservable$.asObservable();

  ngOnInit() {
  }

  updateTitle(jobTitle){
    this.isUpdate = true;
    this.titleObservable$.next(jobTitle);
  }
  
}
