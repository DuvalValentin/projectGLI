import {Component,OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {TownTO} from '../../dto/town';
import {DepartmentTO} from '../../dto/department';
import {RegionTO} from '../../dto/region';

import {BackendTownService} from '../../service/backend-town.service';
import {BackendDepartmentService} from '../../service/backend-department.service';
import {BackendRegionService} from '../../service/backend-region.service';


@Component({
  selector: 'app-town',
  templateUrl: './town.component.html',
  styleUrls: ['./town.component.css']
})
export class TownComponent implements OnInit 
{
  town: TownTO;
  department: DepartmentTO;
  region: RegionTO;
  departmentURL:string;
  regionURL:string;

  constructor
    (
      private backendTown: BackendTownService,
      private backendDepartment: BackendDepartmentService,
      private backendRegion: BackendRegionService,
      private route: ActivatedRoute
    )
  {
    let id: number=this.route.snapshot.params['id']
    this.backendTown.getTown(id).subscribe((t) =>
    {
      this.town=t;
      this.backendDepartment.getDepartment(this.town.idDepartement).subscribe((d) =>
      {
        this.department=d;
        this.departmentURL="/get/department/"+this.department.id;
        this.backendRegion.getRegion(this.department.idRegion).subscribe((r) =>
        {
          this.region=r;
          this.regionURL="/get/region/"+this.region.id;
        });
      });
    });

  }

  ngOnInit() 
  {

  }
}