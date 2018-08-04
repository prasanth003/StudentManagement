import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdUnit } from '../index/AdUnit';
import { AdunitService } from '../../adunit.service';
import { index } from '../index/index.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  adunit: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private adunitservice: AdunitService,
    private fb: FormBuilder) {
      this.createForm();
    }
    createForm() {
      this.angForm = this.fb.group({
             name: ['', Validators.required ],
             reg: ['', Validators.required ]
         });
      }

    updateAdUnit(name, reg) {
      this.route.params.subscribe(params => {
          this.adunitservice.updateAdUnit(name, reg, params['id']);
          this.router.navigate(['index']);
      });
    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.adunitservice.editAdUnit(params['id']).subscribe(res => {
          this.adunit = res;
      });
    });
  }
}
