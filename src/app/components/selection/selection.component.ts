import { Component, OnInit } from '@angular/core';

import {Region} from '../../model/region';
import {Town} from '../../model/town';
import {Department} from '../../model/department';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html'
})
export class SelectionComponent implements OnInit {
  selectedTown:Town;
  selectedRegion:Region;
  selectedDepartment:Department;

  constructor
  (
  ) 
  {
  }
  ngOnInit() {}

  onSelectRegion(region:Region)
  {

    this.resetDepartment();
    this.selectedRegion=region;
  }

  onSelectDepartment(department:Department)
  {
    this.resetTown();
    this.selectedDepartment=department;
  }

  onSelectTown(town:Town)
  {
    this.selectedTown=town;
  }

  private resetDepartment()
  {
    this.selectedDepartment=null;
    this.resetTown();
    
  }
  private resetTown()
  {
    this.selectedTown=null;
  }

}