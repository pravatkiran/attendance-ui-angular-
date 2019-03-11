import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccessService } from '../service/access.service';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {

  access: UserAccess[]=[];

  access_form: FormGroup= new FormGroup ({
    username: new FormControl ('', Validators.required),
    password: new FormControl ('', Validators.required),
    rfid: new FormControl ('', Validators.required),
    pin: new FormControl ('', Validators.required),
    security_code: new FormControl ('', Validators.required),
    public_key: new FormControl ('', Validators.required),
    private_key: new FormControl ('', Validators.required),
    checkbox1: new FormControl(''),
    checkbox2: new FormControl(''),
    checkbox3: new FormControl('')
  });

  constructor(
    private accessService: AccessService
  ) { }
  

  saveAccess(){
   this.accessService.postAccess(this.access_form.value)
        .subscribe(
          data=> console.log("Success!", data),
          error=> console.error("Error!", error)
        );

        console.log(this.access_form.value);
        this.access_form.reset();
  }
  ngOnInit() {
  }

}
