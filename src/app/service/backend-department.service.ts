import {HttpClient} from "@angular/common/http";

import {Department} from "../dto/department";
import {Injectable} from "@angular/core";
import {DepartmentCreator} from "../dto/departmentCreator";

@Injectable({providedIn: 'root'})
export class BackendDepartmentService 
{
  private errorMessage:string="Error ! : ";
  
  constructor(private http: HttpClient) 
  {
  }

  getDepartments():Array<Department>
  {
    let departments:Array<Department>=new Array();
    this.http.get<Department[]>('api/departement').subscribe((e)=>
    {
      e.forEach((department:Department)=>
      {
        departments.push(department);
      });
    });
    return departments;
  }

  getDepartmentsByRegionId(regionId:number)
  {
    let departments:Array<Department>=new Array();
    this.http.get<Department[]>('api/departement/byRegionId/'+regionId).subscribe((e)=>
    {
      e.forEach((department:Department)=>
      {
        departments.push(department);
      });
    });
    return departments;
  }

  postDepartment(departmentCreator:DepartmentCreator)
  {
    this.http.post('api/departement',departmentCreator)
    .subscribe
    (
      ()=>{console.log("Département créé");},
      (error)=>{console.error(this.errorMessage+error);}
    );
  }
}