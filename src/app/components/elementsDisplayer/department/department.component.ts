import { Component, OnInit, Input } from '@angular/core';
import {BackendDepartmentService} from '../../../service/backend-department.service';
import {BackendRegionService} from '../../../service/backend-region.service';
import {BackendTownService} from '../../../service/backend-town.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Department} from '../../../dto/department';
import {Region} from '../../../dto/region';
import {Town} from '../../../dto/town';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html'
})
export class DepartmentComponent implements OnInit {

  department: Department;
  region:Region;
  towns:Array<Town>;
  townsURL:Array<string>
  regionURL:string;
  constructor
  (
    private backendRegion:BackendRegionService,
    private backendDepartment:BackendDepartmentService,
    private backendTown:BackendTownService,
    private route: ActivatedRoute,
    private router:Router
  ) 
  {
    let id=this.route.snapshot.params["id"];
    this.backendDepartment.getDepartment(id).subscribe((d)=>{
      this.department=d;
      
      this.backendRegion.getRegion(this.department.idRegion).subscribe(
        (r)=>
        {
          this.region=r;
          this.regionURL="/get/region/"+this.region.id;
        },
        (error) =>
        {
          this.router.navigate(["/not-found"])
        });
    })
    this.backendTown.getTownsByDepartmentId(id).subscribe((ts)=>{
      this.towns=ts;
    });
  }

  ngOnInit() {
  }

  suppress()
  {
    this.router.navigate(["/delete/department/"+this.department.id]);
  }

  modify()
  {
    this.router.navigate(["/put/department/"+this.department.id]);
  }

}