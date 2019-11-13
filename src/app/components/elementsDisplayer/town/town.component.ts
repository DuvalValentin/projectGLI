import {Component,OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {BackendTownService} from '../../../service/backend-town.service';
import {BackendDepartmentService} from '../../../service/backend-department.service';
import {BackendRegionService} from '../../../service/backend-region.service';

import {Department} from '../../../dto/department';
import {Town} from '../../../dto/town';
import {Region} from '../../../dto/region';
import {Sport} from '../../../dto/sport';
import {BackendSportService} from '../../../service/backend-sport.service';

@Component({
  selector: 'app-town',
  templateUrl: './town.component.html'
})
export class TownComponent implements OnInit 
{
  town: Town;
  department: Department;
  region: Region;
  sports:Array<Sport>;

  constructor
    (
      private backendTown: BackendTownService,
      private backendDepartment: BackendDepartmentService,
      private backendRegion: BackendRegionService,
      private backendSport:BackendSportService,
      private route: ActivatedRoute,
      private router:Router
    )
  {
    let id: number=this.route.snapshot.params['id']
    this.backendTown.getTown(id).subscribe((t) =>
    {
      this.town=t;
      this.backendDepartment.getDepartment(this.town.idDepartement).subscribe((d) =>
      {
        this.department=d;
        this.backendRegion.getRegion(this.department.idRegion).subscribe
          (
            (r) =>
            {
              this.region=r;
            },
            (error)=>
            {
              this.router.navigate["/not-found"];
            }
          );
      });
    });
    this.backendSport.getSportsByTownId(id).subscribe((ss)=>
    {
      this.sports=ss;
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