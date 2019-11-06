import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Region} from '../../model/region';
import {BackendDepartmentService} from '../../service/backend-department.service';
import {DepartmentCreator} from '../../dto/departmentCreator';

@Component({
  selector: 'app-department-adder',
  templateUrl: './department-adder.component.html'
})
export class DepartmentAdderComponent implements OnInit 
{
  departmentForm:FormGroup;
  selectedRegion:Region;

  constructor
  (
    private backendDepartment:BackendDepartmentService,
    private formBuilder:FormBuilder
  ) 
  {}

  ngOnInit() 
  {
    this.initForm();
  }

  onSelectRegion(region:Region)
  {
    this.selectedRegion=region;
  }

  private initForm()
  {
    this.departmentForm=this.formBuilder.group
    ({
      name:'',
      regionId:0
    });
  }

  onSubmitForm() 
  {
    const formValue = this.departmentForm.value;
    const departmentCreator = new DepartmentCreator
    (
      formValue['name'],
      this.selectedRegion.id
    );
    this.backendDepartment.postDepartment(departmentCreator);
  }

}