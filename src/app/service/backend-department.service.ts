import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

import {Department} from "../dto/department";
import {DepartmentCreator} from "../dto/departmentCreator";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class BackendDepartmentService 
{
  private readonly adress:string='api/departement/';
  constructor(private http: HttpClient) {}

  getDepartment(id:number):Observable<Department>
  {
    return this.http.get<Department>(this.adress+id);
  }

  getDepartments():Observable<Array<Department>>
  {
    return this.http.get<Array<Department>>(this.adress);
  }

  getDepartmentsByRegionId(regionId:number):Observable<Array<Department>>
  {
    return this.http.get<Department[]>(this.adress+'byRegionId/'+regionId)
  }

  postDepartment(departmentCreator:DepartmentCreator):Observable<any>
  {
    return this.http.post(this.adress,departmentCreator);
  }

  putDepartment(department:Department):Observable<Department>
  {
    return this.http.put<Department>(this.adress,department);
  }

  deleteDepartment(departmentId:number):Observable<any>
  {
    return this.http.delete(this.adress+departmentId);
  }
}