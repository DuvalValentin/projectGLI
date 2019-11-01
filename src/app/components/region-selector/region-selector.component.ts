import { Component, OnInit } from '@angular/core';
import {Region} from '../../dto/region';
import {BackendAccessService} from '../../service/backend-access.service';

@Component({
  selector: 'app-region-selector',
  templateUrl: './region-selector.component.html',
  styleUrls: ['./region-selector.component.css']
})
export class RegionSelectorComponent implements OnInit {

  regions:Array<Region>;
  selectedRegion:Region;
  
  constructor(private backendAccess: BackendAccessService) 
  {
    this.regions=this.backendAccess.getRegions();
  }

  ngOnInit() {
  }

}
