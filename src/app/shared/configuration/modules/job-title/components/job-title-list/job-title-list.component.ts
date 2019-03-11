import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { JobTitleService } from '../../service/job-title.service';
import { TitleDataService } from '../../service/title-data.service';
import { ActivatedRoute } from '@angular/router';
import { EmploymentComponent } from 'src/app/shared/employment/components/employment.component';
import { UserComponent } from 'src/app/shared/user-registration/components/user/user.component';

@Component({
  selector: 'app-job-title-list',
  templateUrl: './job-title-list.component.html',
  styleUrls: ['./job-title-list.component.css']
})
export class JobtitlelistComponent implements OnInit {

  displayActions: boolean = true;

 @Input () jobTitles: JobTitle[];
 @Output ('onUpdate') onUpdate = new EventEmitter<any>();

 isUpdate: boolean= false;
 
  constructor( 
    private jobTitleService: JobTitleService,
    private dataService: TitleDataService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {

    if(this.route.component == EmploymentComponent)
    this.displayActions = false;

    if(this.route.component == UserComponent)
    this.displayActions = false;
    
    this.jobTitleList();
  }
  jobTitleList(){
    this.jobTitleService.getJobTitle()
    .subscribe((response:any)=>{
      this.jobTitles=response;
      console.log(response);
    })
  }

  editTitle(jobTitle: JobTitle){
    this.dataService.setUpdate(true);
    this.dataService.setTitle(jobTitle);
  }

  deleteTitle(jobTitle: JobTitle){
    this.jobTitleService.removeTitle(jobTitle.job_title_code)
            .subscribe(
              data=> console.log('Success!', data),
              error=> console.error('Error!', error)
            );
  }

}
