import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Town} from '../dto/town';
import {Region} from '../dto/region';
import {Department} from '../dto/department';
import {TownCreator} from '../dto/townCreator';
import {RegionCreator} from '../dto/regionCreator';
import {DepartmentCreator} from '../dto/departmentCreator';

@Injectable({
  providedIn: 'root'
})
export class BackendAccessService 
{
  private errorMessage:string="Error ! : ";
  
  constructor(private http: HttpClient) 
  {
  }

  getTowns():Array<Town>
  {
    let towns:Array<Town>=new Array();
    this.http.get<Town[]>('api/ville').subscribe((e) =>
    {
      e.forEach((element:Town) =>
      {
        towns.push(element);
      });
    });
    return towns;
  }

  getTownsByDepartmentId(departmentId:number):Array<Town>
  {
    let towns:Array<Town>=new Array();
    this.http.get<Town[]>('api/ville/byDepartmentId/'+departmentId).subscribe((e) =>
    {
      e.forEach((element:Town) =>
      {
        towns.push(element);
      });
    });
    return towns;
  }

  getRegions():Array<Region>
  {
    let regions:Array<Region>=new Array();
    this.http.get<Region[]>('api/region').subscribe((e)=>
    {
      e.forEach((region)=>
      {
        regions.push(region);
      });
    });
    return regions;
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

  postRegion(regionCreator:RegionCreator)
  {
    this.http.post('api/region',regionCreator)
    .subscribe
    (
      ()=>{console.log("Région créée");},
      (error)=>{console.log(this.errorMessage+error)}
    );
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

  postTown(townCreator:TownCreator)
  {
    this.http.post('api/ville',townCreator)
    .subscribe
    (
      ()=>{console.log("Ville créée");},
      (error)=>{console.log(this.errorMessage+error);}
    );
  }
}