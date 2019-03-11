import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { DivisionDataService } from '../../service/division-data.service';
import { DivisionService } from '../../service/division.service';

@Component({
  selector: 'app-division-form',
  templateUrl: './division-form.component.html',
  styleUrls: ['./division-form.component.css']
})
export class DivisionFormComponent implements OnInit {

  // selectedFile = null;

  division_form: FormGroup = new FormGroup({
    division_code:  new FormControl('', Validators.required),
    division_name: new FormControl('', Validators.required),
    division_alias: new FormControl('', Validators.required),
    // division_file: new FormControl('', Validators.required)
  });

  isUpdate: boolean = false;

  constructor(
    private divisionService: DivisionService,
    private dataService: DivisionDataService
  ) { }

  ngOnInit():void {
    this.dataService.division.subscribe(division=>{
      console.log("Updating division", division);
      this.Code.setValue(division.division_code);
      this.DivisionName.setValue(division.division_name);
      this.DivisionAlias.setValue(division.division_alias);
    });
    this.dataService.isUpdate.subscribe(isUpdate=>{
      console.log('Update status', isUpdate);
      this.isUpdate= isUpdate;
    })
  }

  get Code(){
    return this.division_form.get('division_code');
  }
  get DivisionName(){
    return this.division_form.get('division_name');
  }
  get DivisionAlias(){
    return this.division_form.get('division_alias');
  }

  saveDivision(){
    console.log("Submitted");

    // check if form should be submitted or updated 
    if(this.isUpdate){
      this.divisionService.updateDivision(this.division_form.value)
            .subscribe(
              data=> console.log("Success!", data),
              error=> console.error("Error!", error)
            );
            this.division_form.reset();

    }
    else {
      this.divisionService.postDivision(this.division_form.value)
            .subscribe(
              data=> console.log("Success!", data),
              error=> console.error("Error!", error)
            );
            this.division_form.reset();
    }

  }
  // onFileChange(event){
  //   this.selectedFile = <File>event.target.files[0];
  // }
  // upload(){
  //   this.divisionService.saveFile(this.selectedFile)
  //         .subscribe( res=> {
  //           console.log(res);
  //         })
  //         console.log(this.selectedFile);
  // }
}
