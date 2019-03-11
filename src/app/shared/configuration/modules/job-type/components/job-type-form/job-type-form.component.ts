import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JobTypeService } from '../../service/job-type.service';
import { TypeDataService } from '../../service/type-data.service';

@Component({
  selector: 'app-job-type-form',
  templateUrl: './job-type-form.component.html',
  styleUrls: ['./job-type-form.component.css']
})
export class JobTypeFormComponent implements OnInit {

  isUpdate: boolean= false;

  job_type_form: FormGroup= new FormGroup({
    job_type_code: new FormControl('', Validators.required),
    job_type_name: new FormControl('', Validators.required),
    job_type_alias: new FormControl('', Validators.required)
  });

  constructor(
    private typeService: JobTypeService,
    private dataService: TypeDataService
  ) { }

  ngOnInit(): void {
    this.dataService.type.subscribe(type=>{
      console.log("updating type", type);
      this.Code.setValue(type.job_type_code);
      this.Name.setValue(type.job_type_name);
      this.Alias.setValue(type.job_type_alias);
    });
    this.dataService.isUpdate.subscribe(isUpdate=>{
      this.isUpdate= isUpdate;
    });
  }

  get Code(){
   return this.job_type_form.get('job_type_code');
  }

  get Name(){
    return this.job_type_form.get('job_type_name');
  }

  get Alias(){
    return this.job_type_form.get('job_type_alias');
  }

  saveType(){

    console.log('Submitted');

    // check if the form should be submitted or updated
    if(this.isUpdate){
      this.typeService.updateType(this.job_type_form.value)
            .subscribe(
              data=> console.log("Success!", data),
              error=> console.error("Error!", error)
            );
            this.job_type_form.reset();
    }
    else{
      this.typeService.postJobType(this.job_type_form.value)
              .subscribe(
                data=> console.log("Success!", data),
                error=> console.error("Error!", error)
              );
              this.job_type_form.reset();
    }
  }

}
