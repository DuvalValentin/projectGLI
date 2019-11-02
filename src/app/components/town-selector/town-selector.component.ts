import { Component, OnInit } from '@angular/core';
import {Town} from "../../dto/town";
import {BackendTownService} from '../../service/backend-town.service';

@Component({
  selector: 'app-town-selector',
  templateUrl: './town-selector.component.html',
  styleUrls: ['./town-selector.component.css']
})
export class TownSelectorComponent implements OnInit 
{
  towns:Array<Town>;
  selectedTown:Town;
  

  constructor(private backendTown:BackendTownService) 
  {
    this.towns=this.backendTown.getTowns();
  }

  ngOnInit() {}

}
