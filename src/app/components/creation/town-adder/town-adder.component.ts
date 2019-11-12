import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {TownCreator} from '../../../dto/townCreator';
import {BackendTownService} from '../../../service/backend-town.service';
import {Region} from '../../../dto/region';
import {Department} from '../../../dto/department';
import {Router} from '@angular/router';

@Component({
  selector: 'app-town-adder',
  templateUrl: './town-adder.component.html'
})
export class TownAdderComponent implements OnInit {

  townForm:FormGroup;
  selectedRegion:Region;
  selectedDepartment:Department;

  constructor
  (
    private backendTown:BackendTownService,
    private formBuilder:FormBuilder,
    private router:Router
  )
  {
  }

  ngOnInit() 
  {
    this.initForm();
  }

  onSelectRegion(region:Region)
  {
    this.selectedRegion=region;
    this.selectedDepartment=null;
  }

  onSelectDepartment(department:Department)
  {
    this.selectedDepartment=department;
  }

  private initForm()
  {
    this.townForm=this.formBuilder.group
    ({
      name:'',
      departmentId:0
    })
  }
  onSubmitForm() 
  {
    const formValue = this.townForm.value;
    const townCreator = new TownCreator
    (
      formValue['name'],
      this.selectedDepartment.id
    );
    this.backendTown.postTown(townCreator)
    .subscribe
    (
      () => {console.log("Ville créée");},
      (error) => {console.log("Error : "+error);}
    );
    this.router.navigate(["/post"])
  }
}