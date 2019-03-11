import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OfficeLocationService } from '../../service/office-location.service';
import { OfficeLocationDataService } from '../../service/office-location-data.service';

@Component({
  selector: 'app-office-location-form',
  templateUrl: './office-location-form.component.html',
  styleUrls: ['./office-location-form.component.css']
})
export class OfficeLocationFormComponent implements OnInit {

  isUpdate: boolean = false;

  office_location_form: FormGroup = new FormGroup({
    office_location_code: new FormControl('', Validators.required),
    office_location_name: new FormControl('', Validators.required),
    office_location_alias: new FormControl('', Validators.required)
  });
  
  constructor(
    private officeLocationService: OfficeLocationService,
    private dataService: OfficeLocationDataService
  ) { }

  ngOnInit():void {
    this.dataService.officeLocation.subscribe(officeLocation=>{
      console.log("updating officelocation", officeLocation);
      this.Code.setValue(officeLocation.office_location_code);
      this.Name.setValue(officeLocation.office_location_name);
      this.Alias.setValue(officeLocation.office_location_alias);
    });
    this.dataService.isUpdate.subscribe(isUpdate=>{
      this.isUpdate = isUpdate;
    });
  }

  get Code(){
    return this.office_location_form.get('office_location_code');
  }

  get Name(){
    return this.office_location_form.get('office_location_name');
  }

  get Alias(){
    return this.office_location_form.get('office_location_alias');
  }

  saveOfficeLocation(){
    console.log("Submitted");

    // check if form should be submitted or updated

    if(this.isUpdate){
      this.officeLocationService.updateOfficeLocation(this.office_location_form.value)
              .subscribe(
                data=> console.log("Success!", data),
                error=> console.error("Error!", error)
              );
              this.office_location_form.reset();
    }
    else{
      this.officeLocationService.postOfficeLocation(this.office_location_form.value)
              .subscribe(
                data=> console.log("Success!", data),
                error=> console.error("Error!", error)
              );
              this.office_location_form.reset();
    }
  }
}
