import { Component, OnInit, Input } from '@angular/core';
import {Region} from '../../dto/region';
import {BackendDepartmentService} from '../../service/backend-department.service';
import {BackendRegionService} from '../../service/backend-region.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  region: Region;
  constructor
  (
    private backendDepartment: BackendDepartmentService,
    private backendRegion: BackendRegionService,
    private route: ActivatedRoute
  )
  {
    let id = this.route.snapshot.params["id"];
    backendRegion.getRegion(id).subscribe((r)=>
    {
      this.region=r;
    })
  }

  ngOnInit() {}
}
