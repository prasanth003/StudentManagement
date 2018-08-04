import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdunitService } from '../../adunit.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;

  constructor(private adunitservice: AdunitService, private fb: FormBuilder) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      reg: ['', Validators.required ],
      dob: ['', Validators.required ],
      mark: ['', Validators.required ],
      dep: ['', Validators.required ]
   });
  }

  addAdUnit(name, reg, dob, mark, dep) {
    this.adunitservice.addAdUnit(name, reg, dob, mark, dep);
}
  ngOnInit() {
  }

}
