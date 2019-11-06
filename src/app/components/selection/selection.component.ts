import { Component, OnInit } from '@angular/core';

import {Region} from '../../model/region';
import {Town} from '../../model/town';
import {Department} from '../../model/department';


@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
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

    this.resetRegion();//tentative pour recharger le composant app-departement-selection
    this.selectedRegion=region;
  }

  onSelectDepartment(department:Department)
  {
    this.resetDepartment();
    this.selectedDepartment=department;
  }

  onSelectTown(town:Town)
  {
    this.selectedTown=town;
  }

  private resetRegion()
  {
    this.selectedRegion=null;
    this.resetDepartment();
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