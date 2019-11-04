import { Component, OnInit } from '@angular/core';
import {Town} from '../../dto/town';
import {Region} from '../../dto/region';
import {Department} from '../../dto/department';
import {BackendTownService} from '../../service/backend-town.service';
import {BackendDepartmentService} from '../../service/backend-department.service';
import {BackendRegionService} from '../../service/backend-region.service';

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

  constructor
  (
    private backendTown: BackendTownService,
    private backendDepartment: BackendDepartmentService,
    private backendRegion: BackendRegionService
  ) 
  {
    this.regions=this.backendRegion.getRegions();
  }
  ngOnInit() {}

  onSelectRegion()
  {
    this.selectedDepartment=null;
    this.selectedTown=null;
    this.townURL=null;
    this.departments=this.backendDepartment.getDepartmentsByRegionId(this.selectedRegion.id);
  }

  onSelectDepartment()
  {
    this.selectedTown=null;
    this.townURL=null;
    this.towns=this.backendTown.getTownsByDepartmentId(this.selectedDepartment.id);
  }

  onSelectTown()
  {
    this.townURL="town/"+this.selectedTown.id;
  }
  

}