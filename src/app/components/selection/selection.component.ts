import { Component, OnInit } from '@angular/core';

import {Region} from '../../dto/region';
import {Town} from '../../dto/town';
import {Department} from '../../dto/department';
import {Sport} from '../../dto/sport';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html'
})
export class SelectionComponent implements OnInit {
  selectedTown:Town;
  selectedRegion:Region;
  selectedDepartment:Department;
  selectedSport:Sport;
  selectedGlobalSport:Sport;

  constructor() {}
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
    this.resetSport();
    this.selectedTown=town;
  }

  onSelectSport(sport:Sport)
  {
    this.selectedSport=sport;
  }

  onSelectGlobalSport(sport:Sport)
  {
    this.selectedGlobalSport=sport;
  }

  private resetDepartment()
  {
    this.selectedDepartment=null;
    this.resetTown();
    
  }
  private resetTown()
  {
    this.resetSport();
    this.selectedTown=null;
  }
  private resetSport()
  {
    this.selectedSport=null;
  }

}