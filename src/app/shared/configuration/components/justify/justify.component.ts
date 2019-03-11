import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-justify',
  templateUrl: './justify.component.html',
  styleUrls: ['./justify.component.css']
})
export class JustifyComponent implements OnInit {
  
  selectedFile = null;

  justifications: Justification[]=[];

  justification_form: FormGroup= new FormGroup({
    user_code: new FormControl('', Validators.required),
    remarks: new FormControl('', Validators.required),
    justification: new FormControl('', Validators.required),
    justification_file: new FormControl('', Validators.required)
  });

  constructor() { }


 
  ngOnInit() {
  }

  onFileChange(event){
    this.selectedFile = <File>event.target.files[0];
  }


}
