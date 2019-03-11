import { Component, OnInit, Input } from '@angular/core';
import { JobPositionService } from '../../service/job-position.service';
import { JobPositionDataService } from '../../service/job-position-data.service';
import { ActivatedRoute } from '@angular/router';
import { EmploymentComponent } from 'src/app/shared/employment/components/employment.component';
import { UserComponent } from 'src/app/shared/user-registration/components/user/user.component';


@Component({
  selector: 'app-job-position-list',
  templateUrl: './job-position-list.component.html',
  styleUrls: ['./job-position-list.component.css']
})
export class JobpositionlistComponent implements OnInit {

  displayActions: boolean = true;

  @Input() jobPositions: JobPosition[];
  constructor(
    private positionService:JobPositionService,
    private dataService: JobPositionDataService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {

    if(this.route.component == EmploymentComponent)
    this.displayActions = false;

    if(this.route.component == UserComponent)
    this.displayActions = false;
     
    this.getPositionList();
  }
  getPositionList(){
    this.positionService.getPosition()
    .subscribe((response:any)=>{
    this.jobPositions=response;
    console.log(response);
    });
  }
  editJobPosition(jobPosition : JobPosition){
    this.dataService.setUpdate(true);
    this.dataService.setJobPosition(jobPosition);
  }

  deleteJobPosition(jobPosition: JobPosition){
    this.positionService.removePosition(jobPosition.job_position_code)
          .subscribe(
            data=> console.log("Success!", data),
            error=> console.error("Error!", error)
          );
  }

}
