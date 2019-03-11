import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GradeService } from '../../service/grade.service';
import { GradeDataService } from '../../service/grade-data.service';
import { ActivatedRoute } from '@angular/router'
import { EmploymentComponent } from 'src/app/shared/employment/components/employment.component';
import { UserComponent } from 'src/app/shared/user-registration/components/user/user.component';

@Component({
  selector: 'app-grade-list',
  templateUrl: './grade-list.component.html',
  styleUrls: ['./grade-list.component.css']
})
export class GradelistComponent implements OnInit {

  displayActions: boolean = true;

 @Input () grades: Grade[]=[];

 @Output('onUpdate') onUpdate = new EventEmitter<any>();

  constructor(
    private gradeService: GradeService,
    private dataService: GradeDataService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {

    if(this.route.component == EmploymentComponent)
    this.displayActions = false;

    if(this.route.component == UserComponent)
    this.displayActions = false;
    
   this.gradeList();
  }
  gradeList(){
    this.gradeService.getGrade()
    .subscribe((response:any)=>{
      this.grades=response;
      console.log(response);
    })
  }

  editGrade(grade: Grade){
    this.dataService.setUpdate(true);
    this.dataService.setGrade(grade);
  }

  deleteGrade(grade: Grade){
    this.gradeService.removeGrade(grade.grade_code)
          .subscribe(
            data=> console.log("Success!", data),
            error=> console.error("Error!", error)
          );
  }
}
