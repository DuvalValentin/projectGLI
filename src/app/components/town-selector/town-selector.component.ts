import { Component, OnInit } from '@angular/core';
import {Town} from "../../dto/town";
import {BackendAccessService} from '../../service/backend-access.service';

@Component({
  selector: 'app-town-selector',
  templateUrl: './town-selector.component.html',
  styleUrls: ['./town-selector.component.css']
})
export class TownSelectorComponent implements OnInit 
{
  towns:Array<Town>;
  selectedTown:Town;
  

  constructor(private backendAccess: BackendAccessService) 
  {
    this.towns=this.backendAccess.getTowns();
  }

  ngOnInit() {}

}
