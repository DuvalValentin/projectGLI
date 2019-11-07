import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {BackendDepartmentService} from '../../service/backend-department.service';
import {BackendRegionService} from '../../service/backend-region.service';
import {RegionCreator} from '../../dto/regionCreator';
import {Router} from '@angular/router';

@Component({
  selector: 'app-region-adder',
  templateUrl: './region-adder.component.html'
})
export class RegionAdderComponent implements OnInit {
  regionForm:FormGroup;

  constructor
  (
    private backendRegion:BackendRegionService,
    private formBuilder:FormBuilder,
    private router:Router
  )
  {}

  ngOnInit() 
  {
    this.initForm();
  }

  private initForm()
  {
    this.regionForm=this.formBuilder.group
    ({
      name:''
    });
  }

  onSubmitForm() 
  {
    const formValue = this.regionForm.value;
    const regionCreator = new RegionCreator
    (
      formValue['name']
    );
    this.backendRegion.postRegion(regionCreator);
    this.router.navigate(["/"])
  }
}