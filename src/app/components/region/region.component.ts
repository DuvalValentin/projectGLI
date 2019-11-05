import { Component, OnInit, Input } from '@angular/core';
import {BackendDepartmentService} from '../../service/backend-department.service';
import {BackendRegionService} from '../../service/backend-region.service';
import {ActivatedRoute} from '@angular/router';
import {Region} from '../../model/region';
import {Department} from '../../model/department';
import {Mapper} from '../../service/mapper.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  region: Region;
  departments:Array<Department>
  constructor
  (
    private backendDepartment: BackendDepartmentService,
    private backendRegion: BackendRegionService,
    private mapper:Mapper,
    private route: ActivatedRoute
  )
  {
    let id = this.route.snapshot.params["id"];
    this.backendRegion.getRegion(id).subscribe((r)=>
    {
      this.region=new Region(r);
    });
    this.backendDepartment.getDepartmentsByRegionId(id).subscribe((ds)=>
    {
      this.departments=this.mapper.arrayDepartmentTOToArrayDepartment(ds);
    });
  }

  ngOnInit() {}
}
