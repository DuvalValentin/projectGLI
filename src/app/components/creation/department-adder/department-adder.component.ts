import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Region} from '../../../dto/region';
import {BackendDepartmentService} from '../../../service/backend-department.service';
import {DepartmentCreator} from '../../../dto/departmentCreator';
import {Router} from '@angular/router';

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
    private formBuilder:FormBuilder,
    private router:Router
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
    this.backendDepartment.postDepartment(departmentCreator)
    .subscribe
    (
      ()=>
      {
        console.log("Département créé");
        this.router.navigate(["/post"]);
      },
      (error)=>{console.error("Error : "+error);}
    );;
  }
}