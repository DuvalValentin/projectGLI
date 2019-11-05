import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {DepartmentTO} from '../../dto/department';
import {TownTO} from '../../dto/town';
import {TownCreator} from '../../dto/townCreator';
import {RegionTO} from '../../dto/region';
import {BackendTownService} from '../../service/backend-town.service';
import {BackendDepartmentService} from '../../service/backend-department.service';
import {BackendRegionService} from '../../service/backend-region.service';

@Component({
  selector: 'app-town-adder',
  templateUrl: './town-adder.component.html',
  styleUrls: ['./town-adder.component.css']
})
export class TownAdderComponent implements OnInit {

  townForm:FormGroup;
  //towns:Array<Town>;
  //selectedTown:Town;
  regions:Array<RegionTO>;
  selectedRegion:RegionTO;
  departments:Array<DepartmentTO>;
  selectedDepartment:DepartmentTO;

  constructor
  (
    private backendTown:BackendTownService,
    private backendDepartment:BackendDepartmentService,
    private backendRegion:BackendRegionService,
    private formBuilder:FormBuilder) 
  {
    this.backendRegion.getRegions().subscribe((e)=>
    {
      this.regions=e;
    });
  }

  ngOnInit() 
  {
    this.initForm();
  }

  onSelectRegion()
  {
    this.selectedDepartment=null;
    //this.selectedTown=null;
    this.backendDepartment.getDepartmentsByRegionId(this.selectedRegion.id).subscribe((e)=>{
      this.departments=e;
    });
  }

  onSelectDepartment()
  {
    //this.selectedTown=null;
    /*this.backendTown.getTownsByDepartmentId(this.selectedDepartment.id).subscribe((e)=>{
      this.towns=e;
    });*/
  }

  initForm()
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
    this.backendTown.postTown(townCreator);
  }
}