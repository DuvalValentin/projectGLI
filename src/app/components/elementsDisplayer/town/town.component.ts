import {Component,OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {BackendTownService} from '../../../service/backend-town.service';
import {BackendDepartmentService} from '../../../service/backend-department.service';
import {BackendRegionService} from '../../../service/backend-region.service';

import {Department} from '../../../model/department';
import {Town} from '../../../model/town';
import {Region} from '../../../model/region';

@Component({
  selector: 'app-town',
  templateUrl: './town.component.html'
})
export class TownComponent implements OnInit 
{
  town: Town;
  department: Department;
  region: Region;
  departmentURL: string;
  regionURL: string;

  constructor
    (
      private backendTown: BackendTownService,
      private backendDepartment: BackendDepartmentService,
      private backendRegion: BackendRegionService,
      private route: ActivatedRoute,
      private router:Router
    )
  {
    let id: number=this.route.snapshot.params['id']
    this.backendTown.getTown(id).subscribe((t) =>
    {
      this.town=new Town(t);
      this.backendDepartment.getDepartment(this.town.idDepartement).subscribe((d) =>
      {
        this.department=new Department(d);
        this.departmentURL="/get/department/"+this.department.id;
        this.backendRegion.getRegion(this.department.idRegion).subscribe
          (
            (r) =>
            {
              this.region=new Region(r);
              this.regionURL="/get/region/"+this.region.id;
            },
            (error)=>
            {
              console.error("ERROR : region non trouvée");
              this.router.navigate["/not-found"];
            }
          );
      });
    });

  }

  ngOnInit() 
  {

  }
  suppress()
  {
    this.router.navigate(["/delete/town/"+this.town.id]);
  }
  modify()
  {
    this.router.navigate(["/put/town/"+this.town.id]);
  }
}