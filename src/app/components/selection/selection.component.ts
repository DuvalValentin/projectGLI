import { Component, OnInit } from '@angular/core';

import {Region} from '../../dto/region';
import {Town} from '../../dto/town';
import {Department} from '../../dto/department';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html'
})
export class SelectionComponent implements OnInit {
  selectedTown:Town;
  selectedTownURL:string;
  selectedRegion:Region;
  selectedRegionURL:string;
  selectedDepartment:Department;
  selectedDepartmentURL:string;

  constructor() {}
  ngOnInit() {}

  onSelectRegion(region:Region)
  {

    this.resetDepartment();
    this.selectedRegion=region;
    this.selectedRegionURL='region/'+this.selectedRegion.id;
  }

  onSelectDepartment(department:Department)
  {
    this.resetTown();
    this.selectedDepartment=department;
    this.selectedDepartmentURL='department/'+this.selectedDepartment.id;
  }

  onSelectTown(town:Town)
  {
    this.selectedTown=town;
    this.selectedTownURL='town/'+this.selectedTown.id;
  }

  private resetDepartment()
  {
    this.selectedDepartment=null;
    this.selectedDepartmentURL=null;
    this.resetTown();
    
  }
  private resetTown()
  {
    this.selectedTown=null;
    this.selectedTownURL=null;
  }

}