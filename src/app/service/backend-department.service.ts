import {HttpClient} from "@angular/common/http";

import {DepartmentTO} from "../dto/department";
import {Injectable} from "@angular/core";
import {DepartmentCreator} from "../dto/departmentCreator";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class BackendDepartmentService 
{ 
  constructor(private http: HttpClient) {}

  getDepartment(id:number):Observable<DepartmentTO>
  {
    return this.http.get<DepartmentTO>('api/departement/'+id);
  }

  getDepartments():Observable<Array<DepartmentTO>>
  {
    return this.http.get<Array<DepartmentTO>>('api/departement');
  }

  getDepartmentsByRegionId(regionId:number):Observable<Array<DepartmentTO>>
  {
    return this.http.get<DepartmentTO[]>('api/departement/byRegionId/'+regionId)
  }

  postDepartment(departmentCreator:DepartmentCreator):Observable<any>
  {
    return this.http.post('api/departement',departmentCreator)
  }

  deleteDepartment(departmentId:number):Observable<any>
  {
    return this.http.delete('api/departement/'+departmentId);
  }
}