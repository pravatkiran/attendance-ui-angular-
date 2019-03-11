import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { OfficeLocationService } from '../../service/office-location.service';
import { OfficeLocationDataService } from '../../service/office-location-data.service';
import { ActivatedRoute } from '@angular/router';
import { EmploymentComponent } from 'src/app/shared/employment/components/employment.component';
import { UserComponent } from 'src/app/shared/user-registration/components/user/user.component';

@Component({
  selector: 'app-office-location-list',
  templateUrl: './office-location-list.component.html',
  styleUrls: ['./office-location-list.component.css']
})
export class OfficelocationlistComponent implements OnInit {

  displayActions: boolean = true;

  @Input () officeLocations: OfficeLocation[];
  @Output ('onUpdate') onUpdate= new EventEmitter<any>();

  isUpdate: boolean= false;

  constructor( 
    private officeLocationService: OfficeLocationService,
    private dataService: OfficeLocationDataService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    
    if(this.route.component == EmploymentComponent)
    this.displayActions = false;

    if(this.route.component == UserComponent)
    this.displayActions = false;
    
    this.officeLocationList();
  }

  officeLocationList(){
    this.officeLocationService.getOfficeLocation()
    .subscribe((response: any)=>{
      this.officeLocations= response;
      console.log(response);
    })
  }

  editOfficeLocation(officeLocation: OfficeLocation){
    this.dataService.setUpdate(true);
    this.dataService.setOfficeLocation(officeLocation);
  }

  deleteOfficeLocation(officeLocation: OfficeLocation){
    this.officeLocationService.removeOfficeLocation(officeLocation.office_location_code)
          .subscribe(
            data=> console.log("Success!", data),
            error=> console.error("Error!", error)
          );
  }
}
