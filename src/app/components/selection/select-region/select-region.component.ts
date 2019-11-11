import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Region} from '../../../model/region';
import {BackendRegionService} from '../../../service/backend-region.service';
import {Mapper} from '../../../service/mapper.service';


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
    private backendRegion: BackendRegionService,
    private mapper:Mapper
  )
  {
    this.backendRegion.getRegions().subscribe((e)=>
    {
      this.regions=this.mapper.arrayRegionTOToArrayRegion(e);
    });
  }

  ngOnInit() {
  }

  onSelectRegion()
  {
    this.regionOut.emit(this.selectedRegion)
  }

}
