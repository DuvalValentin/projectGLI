import {Component,OnInit} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

import {BackendDepartmentService} from '../../service/backend-department.service';
import {BackendRegionService} from '../../service/backend-region.service';
import {Mapper} from '../../service/mapper.service';

import {Department} from '../../model/department';
import {Region} from '../../model/region';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html'
})
export class RegionComponent implements OnInit
{

  region: Region;
  departments: Array<Department>
  constructor
    (
      private backendDepartment: BackendDepartmentService,
      private backendRegion: BackendRegionService,
      private mapper: Mapper,
      private route: ActivatedRoute,
      private router: Router
    )
  {
    let id=this.route.snapshot.params["id"];
    this.backendRegion.getRegion(id).subscribe
      (
        (r) =>
        {
          this.region=new Region(r);
          this.backendDepartment.getDepartmentsByRegionId(id).subscribe((ds) =>
          {
            this.departments=this.mapper.arrayDepartmentTOToArrayDepartment(ds);
          });
        },
        (error) =>
        {
          this.router.navigate(["/not-found"])
        }
      );
  }

  ngOnInit() {}

  suppress()
  {
    this.router.navigate(["/delete/region/"+this.region.id]);
  }

  modify()
  {
    this.router.navigate(["/put/region/"+this.region.id]);
  }
}
