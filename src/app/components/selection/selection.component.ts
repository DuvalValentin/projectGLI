import { Component, OnInit } from '@angular/core';
import {Town} from '../../dto/town';
import {Region} from '../../dto/region';
import {Department} from '../../dto/department';
import {BackendAccessService} from '../../service/backend-access.service';

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

  constructor(private backendAccess: BackendAccessService) 
  {
    this.towns=this.backendAccess.getTowns();
    this.regions=this.backendAccess.getRegions();
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
  
  ngOnInit() {}
}