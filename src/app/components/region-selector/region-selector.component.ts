import { Component, OnInit } from '@angular/core';
import {Region} from '../../dto/region';
import {BackendRegionService} from '../../service/backend-region.service';

@Component({
  selector: 'app-region-selector',
  templateUrl: './region-selector.component.html',
  styleUrls: ['./region-selector.component.css']
})
export class RegionSelectorComponent implements OnInit {

  regions:Array<Region>;
  selectedRegion:Region;
  
  constructor(private backendRegion: BackendRegionService) 
  {
    this.regions=this.backendRegion.getRegions();
  }

  ngOnInit() {
  }

}
