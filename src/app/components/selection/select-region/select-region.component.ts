import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Region} from '../../../dto/region';
import {BackendRegionService} from '../../../service/backend-region.service';


@Component({
  selector: 'app-select-region',
  templateUrl: './select-region.component.html'
})
export class SelectRegionComponent implements OnInit {

  regions:Array<Region>;
  selectedRegion:Region;
  @Output()regionOut = new EventEmitter<Region>();
  constructor
  (
    private backendRegion: BackendRegionService
  )
  {
    this.backendRegion.getRegions().subscribe((rs)=>
    {
      this.regions=rs;
    });
  }

  ngOnInit() {
  }

  onSelectRegion()
  {
    this.regionOut.emit(this.selectedRegion)
  }

}
