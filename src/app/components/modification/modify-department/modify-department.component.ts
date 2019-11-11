import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
import {Region} from '../../../model/region';
import {BackendDepartmentService} from '../../../service/backend-department.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Department} from '../../../model/department';
import {DepartmentTO} from '../../../dto/department';

@Component({
  selector: 'app-modify-department',
  templateUrl: './modify-department.component.html'
})
export class ModifyDepartmentComponent implements OnInit {

  departmentForm:FormGroup;
  selectedRegion:Region;
  initialDepartment:Department;

  constructor
  (
    private backendDepartment:BackendDepartmentService,
    private formBuilder:FormBuilder,
    private router:Router,
    private route:ActivatedRoute
  ) 
  {
    
  }

  ngOnInit() 
  {
    this.backendDepartment.getDepartment(this.route.snapshot.params["id"]).subscribe((d)=>{
      this.initialDepartment=new Department(d);
      this.initForm();
    });
  }

  onSelectRegion(region:Region)
  {
    this.selectedRegion=region;
  }

  private initForm()
  {
    this.departmentForm=this.formBuilder.group
    ({
      name:this.initialDepartment.name,
      regionId:this.initialDepartment.idRegion
    });
  }

  onSubmitForm() 
  {
    const formValue = this.departmentForm.value;
    const departmentTO = new DepartmentTO
    (
      this.initialDepartment.id,
      formValue['name'],
      this.selectedRegion.id,
      this.initialDepartment.idVilles
    );
    this.backendDepartment.putDepartment(departmentTO)
    .subscribe
    (
      ()=>
      {
        console.log("Département modifié");
        this.router.navigate(["/put"]);
      },
      (error)=>{console.error("Error : "+error);}
    );
  }

}
