import {Injectable} from "@angular/core";

import {HttpClient} from "@angular/common/http";

import {Region} from "../dto/region";

import {RegionCreator} from "../dto/regionCreator";

@Injectable({providedIn: 'root'})
export class BackendRegionService 
{
  private errorMessage:string="Error ! : ";
  
  constructor(private http: HttpClient) 
  {
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

  postRegion(regionCreator:RegionCreator)
  {
    this.http.post('api/region',regionCreator)
    .subscribe
    (
      ()=>{console.log("Région créée");},
      (error)=>{console.log(this.errorMessage+error)}
    );
  }
}