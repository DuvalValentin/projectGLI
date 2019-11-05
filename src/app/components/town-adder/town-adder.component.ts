import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {TownCreator} from '../../dto/townCreator';
import {BackendTownService} from '../../service/backend-town.service';
import {BackendDepartmentService} from '../../service/backend-department.service';
import {BackendRegionService} from '../../service/backend-region.service';
import {Region} from '../../model/region';
import {Department} from '../../model/department';
import {Mapper} from '../../service/mapper.service';

@Component({
  selector: 'app-town-adder',
  templateUrl: './town-adder.component.html',
  styleUrls: ['./town-adder.component.css']
})
export class TownAdderComponent implements OnInit {

  townForm:FormGroup;
  regions:Array<Region>;
  selectedRegion:Region;
  departments:Array<Department>;
  selectedDepartment:Department;

  constructor
  (
    private backendTown:BackendTownService,
    private backendDepartment:BackendDepartmentService,
    private backendRegion:BackendRegionService,
    private mapper:Mapper,
    private formBuilder:FormBuilder) 
  {
    this.backendRegion.getRegions().subscribe((e)=>
    {
      this.regions=this.mapper.arrayRegionTOToArrayRegion(e);
    });
  }

  ngOnInit() 
  {
    this.initForm();
  }

  onSelectRegion()
  {
    this.selectedDepartment=null;
    this.backendDepartment.getDepartmentsByRegionId(this.selectedRegion.id).subscribe((e)=>{
      this.departments=this.mapper.arrayDepartmentTOToArrayDepartment(e);
    });
  }

  onSelectDepartment()
  {
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