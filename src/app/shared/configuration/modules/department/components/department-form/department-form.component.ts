import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DepartmentService } from '../../service/department.service';
import { DepartmentDataService } from '../../service/department-data.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {

//  selectedFile = null;

  department_form: FormGroup = new FormGroup({
    department_code: new FormControl('', Validators.required),
    department_name: new FormControl('', Validators.required),
    department_alias: new FormControl('', Validators.required),
    // department_file: new FormControl('', Validators.required)
  });
  
  isUpdate: boolean = false;

  constructor(
    private departmentService: DepartmentService,
    private dataService: DepartmentDataService
  ) { }

  ngOnInit(): void {
    this.dataService.department.subscribe(department => {
      console.log("Updating department", department);
      this.Code.setValue(department.department_code);
      this.DepartmentName.setValue(department.department_name);
      this.DepartmentAlias.setValue(department.department_alias);
      // this.DepartmentFile.setValue(department.department_file);
    });

    this.dataService.isUpdate.subscribe(isUpdate => {
      console.log('update status', isUpdate);
      this.isUpdate = isUpdate;
    })

  }

  get Code() {
    return this.department_form.get('department_code');
  }

  get DepartmentName() {
    return this.department_form.get('department_name');
  }

  get DepartmentAlias() {
    return this.department_form.get('department_alias');
  }

  get DepartmentFile() {
    return this.department_form.get('department_file');
  }

  saveDepartment() {
    console.log("Submitted");

    // check if form should be submited or upated
    if (this.isUpdate) {
      this.departmentService.updateDepartment(this.department_form.value)
        .subscribe(
          data => {
            console.log(data);
          },
          error => {
            console.log(error);
          }
        );
        this.department_form.reset();
        console.log(this.department_form.value);
        location.reload();
    } else {
      this.departmentService.postDepartment(this.department_form.value)
        .subscribe(
          data => console.log('Success!', data),
          error => {
            console.error("Error", error)
          }
        );
        this.department_form.reset();
        location.reload();
        console.log(this.department_form.value);
    }

  }

  // onFileChange(event){
  //   this.selectedFile = <File>event.target.files[0];
  // }
  // upload(){
  //   this.departmentService.saveFile(this.selectedFile)
  //   .subscribe(res=> {
  //     console.log(res);
  //   })
  //   console.log(this.selectedFile);
  // }

}
