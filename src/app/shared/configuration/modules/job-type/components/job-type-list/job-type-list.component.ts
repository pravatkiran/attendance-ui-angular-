import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { JobTypeService } from '../../service/job-type.service';
import { TypeDataService } from '../../service/type-data.service';
import { ActivatedRoute } from '@angular/router';
import { EmploymentComponent } from 'src/app/shared/employment/components/employment.component';
import { UserComponent } from 'src/app/shared/user-registration/components/user/user.component';


@Component({
  selector: 'app-job-type-list',
  templateUrl: './job-type-list.component.html',
  styleUrls: ['./job-type-list.component.css']
})
export class JobtypelistComponent implements OnInit {

  displayActions: boolean = true;

  @Input () jobTypes: JobType[];
  @Output ('onUpdate') onUpdate = new EventEmitter<any>();

  isUpdate: boolean= false;

  constructor(
    private jobTypeService: JobTypeService,
    private dataService: TypeDataService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {

    if(this.route.component == EmploymentComponent)
    this.displayActions = false;

    if(this.route.component == UserComponent)
    this.displayActions = false;
    
    this.jobTypeList();
  }
  jobTypeList(){
    this.jobTypeService.getJobType()
    .subscribe((response:any)=>{
      this.jobTypes= response;
      console.log(response);
    });
  }

  editType(jobType: JobType){
    this.dataService.setUpdate(true);
    this.dataService.setType(jobType);
  }

  deleteType(jobType: JobType){
    this.jobTypeService.removeType(jobType.job_type_code)
        .subscribe(
          data=> console.log("Success!", data),
          error=> console.error("Error!", error)
        );
  }

}
