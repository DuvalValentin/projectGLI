import { Component, OnInit, Input } from '@angular/core';
import {Department} from '../../dto/department';
import {BackendDepartmentService} from '../../service/backend-department.service';
import {BackendRegionService} from '../../service/backend-region.service';
import {BackendTownService} from '../../service/backend-town.service';
import {ActivatedRoute} from '@angular/router';
import {Town} from '../../dto/town';
import {Region} from '../../dto/region';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  department: Department;
  region:Region;
  towns:Array<Town>;
  regionURL:string;
  constructor
  (
    private backendRegion:BackendRegionService,
    private backendDepartment:BackendDepartmentService,
    private backendTown:BackendTownService,
    private route: ActivatedRoute
  ) 
  {
    let id=this.route.snapshot.params["id"];
    this.backendDepartment.getDepartment(id).subscribe((d)=>{
      this.department=d;
      this.towns=this.backendTown.getTownsByDepartmentId(id);
      this.backendRegion.getRegion(this.department.idRegion).subscribe((r)=>
      {
        this.region=r;
        this.regionURL="/get/region/"+this.region.id;
      });
    })
  }

  ngOnInit() {
  }

}
