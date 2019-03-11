import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DepartmentService } from '../../service/department.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartmentDataService } from '../../service/department-data.service';
import { EmploymentComponent } from 'src/app/shared/employment/components/employment.component';
import { UserComponent } from 'src/app/shared/user-registration/components/user/user.component';



@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentlistComponent implements OnInit {

  displayActions: boolean = true;



  @Input() departments: Department[] = [];

  @Output('onUpdate') onUpdate = new EventEmitter<any>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private departmentService: DepartmentService,
    private dataService: DepartmentDataService

  ) {

  }

  ngOnInit() {
    console.log(this.route.component);
    if (this.route.component == EmploymentComponent)
      this.displayActions = false;

    if (this.route.component == UserComponent)
      this.displayActions = false;

    this.getDepartmentLists();
  }

  getDepartmentLists() {
    this.departmentService.getDepartments()
      .subscribe((response: any) => {
        this.departments = response;
        console.log(response);
      },
        error => {
          console.log(error);
        }
      );
  }
  editDepartment(department: Department) {
    // this.departmentService.department_list = department ;
    this.dataService.setUpdate(true);
    this.dataService.setDepartment(department);

  }

  deleteDepartment(department: Department) {
    this.departmentService.removeDepartment(department.department_code)
      .subscribe(
        department => console.log(department),
        error => console.error("Error!", error)
      );

  }

} 
