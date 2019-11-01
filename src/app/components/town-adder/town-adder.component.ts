import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import {BackendAccessService} from '../../service/backend-access.service';
import {Department} from '../../dto/department';
import {Town} from '../../dto/town';
import {TownCreator} from '../../dto/townCreator';
import {Region} from '../../dto/region';

@Component({
  selector: 'app-town-adder',
  templateUrl: './town-adder.component.html',
  styleUrls: ['./town-adder.component.css']
})
export class TownAdderComponent implements OnInit {

  townForm:FormGroup;
  towns:Array<Town>;
  selectedTown:Town;
  regions:Array<Region>;
  selectedRegion:Region;
  departments:Array<Department>;
  selectedDepartment:Department;

  constructor(private backendAccess: BackendAccessService,private formBuilder:FormBuilder) 
  {
    this.regions=backendAccess.getRegions();
  }

  ngOnInit() 
  {
    this.initForm();
  }

  onSelectRegion()
  {
    this.selectedDepartment=null;
    this.selectedTown=null;
    this.departments=this.backendAccess.getDepartmentsByRegionId(this.selectedRegion.id);
  }

  onSelectDepartment()
  {
    this.selectedTown=null;
    this.towns=this.backendAccess.getTownsByDepartmentId(this.selectedDepartment.id);
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
    this.backendAccess.postTown(townCreator);
  }
}