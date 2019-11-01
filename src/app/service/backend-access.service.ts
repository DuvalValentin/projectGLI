import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Town} from '../dto/town';
import {Region} from '../dto/region';
import {Department} from '../dto/department';

@Injectable({
  providedIn: 'root'
})
export class BackendAccessService 
{
  
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

  getRegions():Array<Region>
  {
    let regions:Array<Region>=new Array();
    this.http.get<any>('api/region').subscribe((e)=>
    {
      e.forEach((region)=>
      {
        regions.push(region)
      });
    });
    return regions;
  }

  getDepartments():Array<Department>
  {
    let departments:Array<Department>=new Array();
    this.http.get<any>('api/departement').subscribe((e)=>
    {
      e.forEach((department)=>
      {
        departments.push(department)
      });
    });
    return departments;
  }

  postRegion(region:Region)
  {
    this.http.post('api/region',region);
  }

  postTown(town:Town)
  {
    this.http.post('api/ville',this.townToJSONCreation(town))
    .subscribe
    (
      ()=>{console.log("tout est ok");},
      (error)=>{console.log(this.townToJSONCreation(town));console.log('Erreur ! : '+ error);}
    );
  }

  //FIXME pas Town en entrée
  townToJSONCreation(town:Town)
  {
    let townJSON=
    {
      "name":town.name,
      "idDepartement":town.id
    }
    return townJSON;
  }
  
}
