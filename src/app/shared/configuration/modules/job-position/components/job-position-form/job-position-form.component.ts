import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JobPositionService } from '../../service/job-position.service';
import { JobPositionDataService } from '../../service/job-position-data.service';

@Component({
  selector: 'app-job-position-form',
  templateUrl: './job-position-form.component.html',
  styleUrls: ['./job-position-form.component.css']
})
export class JobPositionFormComponent implements OnInit {

  isUpdate: boolean = false;

  job_position_form: FormGroup = new FormGroup({
    job_position_code: new FormControl('', Validators.required),
    job_position_name: new FormControl('', Validators.required),
    job_position_alias: new FormControl('', Validators.required)
  }); 

  constructor(
    private positionService: JobPositionService,
    private dataService: JobPositionDataService
    ) { }

  ngOnInit(): void {
    this.dataService.jobPosition.subscribe(jobPosition =>{
      console.log('Updating job position', jobPosition);
      this.Code.setValue(jobPosition.job_position_code);
      this.Name.setValue(jobPosition.job_position_name);
      this.Alias.setValue(jobPosition.job_position_alias)
    });
    this.dataService.isUpdate.subscribe(isUpdate=>{
      console.log("Update status", isUpdate);
      this.isUpdate = isUpdate;
    })
  }


  get Code(){
    return this.job_position_form.get('job_position_code');
  }

  get Name(){
    return this.job_position_form.get('job_position_name');
  }

  get Alias(){
    return this.job_position_form.get('job_position_alias');
  }

  saveJobPosition(){
    console.log("Submitted");

    // check if form should be submitted or updated

    if(this.isUpdate){
      this.positionService.updatePosition(this.job_position_form.value)
            .subscribe(
              data=> console.log("Success!", data), 
              error=> console.error("Error!", error)
            );
            this.job_position_form.reset();
    }
    else{
      this.positionService.postPosition(this.job_position_form.value)
            .subscribe(
              data=> console.log("Success!", data), 
              error=> console.error("Error!", error)
            );
            this.job_position_form.reset();
    }
  }
}
