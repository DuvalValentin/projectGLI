import { Component, OnInit } from '@angular/core';

import {BackendTownService} from '../../service/backend-town.service';
import {BackendDepartmentService} from '../../service/backend-department.service';
import {BackendRegionService} from '../../service/backend-region.service';
import {Mapper} from '../../service/mapper.service';

import {Region} from '../../model/region';
import {Town} from '../../model/town';
import {Department} from '../../model/department';


@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {
  towns:Array<Town>;
  selectedTown:Town;
  regions:Array<Region>;
  selectedRegion:Region;
  departments:Array<Department>;
  selectedDepartment:Department;
  townURL:string;
  departmentURL:string;
  regionURL:string;

  constructor
  (
    private backendTown: BackendTownService,
    private backendDepartment: BackendDepartmentService,
    private backendRegion: BackendRegionService,
    private mapper:Mapper
  ) 
  {
    this.backendRegion.getRegions().subscribe((e)=>
    {
      this.regions=mapper.arrayRegionTOToArrayRegion(e);
    });
  }
  ngOnInit() {}

  onSelectRegion()
  {
    this.resetDepartments();
    this.backendDepartment.getDepartmentsByRegionId(this.selectedRegion.id).subscribe((e)=>
    {
      this.departments=this.mapper.arrayDepartmentTOToArrayDepartment(e);
    });
  }

  onSelectDepartment()
  {
    this.resetTowns();
    this.townURL=null;this.backendTown.getTownsByDepartmentId(this.selectedDepartment.id).subscribe((e)=>{
      this.towns=this.mapper.arrayTownTOToArrayTown(e);
    });
    this.departmentURL="department/"+this.selectedDepartment.id;
  }

  onSelectTown()
  {
    this.townURL="town/"+this.selectedTown.id;
  }

  private  resetDepartments()
  {
    this.departments=null;
    this.resetTowns();
  }
  
  private resetTowns()
  {
    this.towns=null;
  }

}