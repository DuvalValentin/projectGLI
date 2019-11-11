import { Component, OnInit, Input } from '@angular/core';
import {BackendDepartmentService} from '../../../service/backend-department.service';
import {BackendRegionService} from '../../../service/backend-region.service';
import {BackendTownService} from '../../../service/backend-town.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Mapper} from '../../../service/mapper.service';
import {Department} from '../../../model/department';
import {Region} from '../../../model/region';
import {Town} from '../../../model/town';

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
    private mapper:Mapper,
    private route: ActivatedRoute,
    private router:Router
  ) 
  {
    let id=this.route.snapshot.params["id"];
    this.backendDepartment.getDepartment(id).subscribe((d)=>{
      this.department=new Department(d);
      
      this.backendRegion.getRegion(this.department.idRegion).subscribe((r)=>
      {
        this.region=new Region(r);
        this.regionURL="/get/region/"+this.region.id;
      });
    })
    this.backendTown.getTownsByDepartmentId(id).subscribe((ts)=>{
      this.towns=this.mapper.arrayTownTOToArrayTown(ts);
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