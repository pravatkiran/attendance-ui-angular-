import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DivisionService } from '../../service/division.service';
import { DivisionDataService } from '../../service/division-data.service';
import { ActivatedRoute } from '@angular/router';
import { EmploymentComponent } from 'src/app/shared/employment/components/employment.component';
import { UserComponent } from 'src/app/shared/user-registration/components/user/user.component';

@Component({
  selector: 'app-division-list',
  templateUrl: './division-list.component.html',
  styleUrls: ['./division-list.component.css']
})
export class DivisionlistComponent implements OnInit {

  displayActions: boolean = true;

  @Input() divisions: Division[]=[];

  @Output('onUpdate') onUpdate = new EventEmitter<any>();

  // division: Division[]=[];

  
  constructor(
    private divisionService: DivisionService,
    private dataService: DivisionDataService,
    private route : ActivatedRoute
  ) { 
    // this.divisions = JSON.parse(localStorage.getItem('division'));
  }

  ngOnInit() {

    if(this.route.component == EmploymentComponent)
    this.displayActions = false;

    if(this.route.component == UserComponent)
    this.displayActions = false;
    
    this.getDivisionList();

  }
  getDivisionList(){
    this.divisionService.getDivision()
    .subscribe((response:any)=>{
      this.divisions=response;
      console.log(response);
    });
  }
  editDivision(division: Division){
    this.dataService.setUpdate(true);
    this.dataService.setDivision(division);
  }
  
  deleteDivision(division: Division){
    this.divisionService.removeDivision(division.division_code)
                  .subscribe(
                    division=> console.log("Success!", division),
                    error=> console.error("Error!", error)
                  );
  }

}
