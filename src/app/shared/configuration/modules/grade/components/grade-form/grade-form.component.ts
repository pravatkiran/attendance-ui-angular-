import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GradeService } from '../../service/grade.service';
import { GradeDataService } from '../../service/grade-data.service';

@Component({
  selector: 'app-grade-form',
  templateUrl: './grade-form.component.html',
  styleUrls: ['./grade-form.component.css']
})
export class GradeFormComponent implements OnInit {

  isUpdate: boolean = false;

  grade_form: FormGroup = new FormGroup({
    grade_code: new FormControl('', Validators.required),
    grade_name: new FormControl('', Validators.required),
    grade_alias: new FormControl('', Validators.required)
  });

  constructor(
    private gradeService: GradeService,
    private dataService: GradeDataService
  ) { }

  ngOnInit(): void {
    this.dataService.grade.subscribe(grade=>{
      console.log("Updating grade", grade);
      this.Code.setValue(grade.grade_code);
      this.Name.setValue(grade.grade_name);
      this.Alias.setValue(grade.grade_alias);
    });
    this.dataService.isUpdate.subscribe(isUpdate=>{
      this.isUpdate = isUpdate;
    });
  }

  get Code(){
    return this.grade_form.get('grade_code');
  }

  get Name(){
    return this.grade_form.get('grade_name');
  }

  get Alias(){
    return this.grade_form.get('grade_alias');
  }

  saveGrade(){
    console.log("Submitted");

    // check if form should be submitted or updated

    if(this.isUpdate){
      this.gradeService.updateGrade(this.grade_form.value)
            .subscribe(
              data=> console.log("Success!", data),
              error=> console.error("Error!", error)
            );
            this.grade_form.reset();
    }
    else {
      this.gradeService.postGrade(this.grade_form.value)
            .subscribe(
              data=> console.log("Success!", data),
              error=> console.error("Error!", error)
            );
            this.grade_form.reset();
    }
  }

}
