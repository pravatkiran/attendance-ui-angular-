import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JobTitleService } from '../../service/job-title.service';
import { TitleDataService } from '../../service/title-data.service';

@Component({
  selector: 'app-job-title-form',
  templateUrl: './job-title-form.component.html',
  styleUrls: ['./job-title-form.component.css']
})
export class JobTitleFormComponent implements OnInit {

  isUpdate: boolean = false;

  job_title_form: FormGroup = new FormGroup({
    job_title_code: new FormControl('', Validators.required),
    job_title_name: new FormControl('', Validators.required),
    job_title_alias: new FormControl('', Validators.required)
  });

  constructor(
   private titleService: JobTitleService,
   private dataService: TitleDataService
  ) { }

 ngOnInit() : void{
   this.dataService.jobTitle.subscribe( jobTitle=>{
     console.log("updating jobTitle", jobTitle);
     this.Code.setValue(jobTitle.job_title_code);
     this.Name.setValue(jobTitle.job_title_name);
     this.Alias.setValue(jobTitle.job_title_alias);
   });
   this.dataService.isUpdate.subscribe( isUpdate=>{
     this.isUpdate = isUpdate;
   });
 }
  get Code(){
    return this.job_title_form.get('job_title_code');
  }

  get Name(){
    return this.job_title_form.get('job_title_name');
  }

  get Alias(){
    return this.job_title_form.get('job_title_alias');
  }

  saveTitle(){
    console.log("Submitted");

    // check if the form should be sumitted or updated

    if(this.isUpdate){
      console.log(this.job_title_form.value);
      this.titleService.updateTitle(this.job_title_form.value)
              .subscribe(
                data=> console.log("Success!", data),
                error=> console.error("Error!", error)
              );
           console.log(this.job_title_form.value);  
    }
    else{
      this.titleService.postJobTitle(this.job_title_form.value)
                .subscribe(
                  data=> console.log("Success!", data),
                  error=> console.error("Error!" , error)
                );
    }
  }
}
