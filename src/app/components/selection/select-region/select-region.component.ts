import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {Region} from '../../../dto/region';
import {BackendRegionService} from '../../../service/backend-region.service';


@Component({
  selector: 'app-select-region',
  templateUrl: './select-region.component.html'
})
export class SelectRegionComponent implements OnInit {

  regions:Array<Region>;
  selectedRegion:Region;
  @Input() initialRegion:Region;
  @Output()regionOut = new EventEmitter<Region>();
  constructor
  (
    private backendRegion: BackendRegionService
  )
  {
    
  }

  ngOnInit() 
  {
    this.backendRegion.getRegions().subscribe((rs)=>
    {
      this.regions=rs;
    });
    if(this.initialRegion)
    {
      this.selectedRegion=this.initialRegion;
    }
  }

  onSelectRegion()
  {
    this.regionOut.emit(this.selectedRegion)
  }

}
