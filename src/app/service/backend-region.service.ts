import {Injectable} from "@angular/core";

import {HttpClient} from "@angular/common/http";

import {RegionTO} from "../dto/region";
import {RegionCreator} from "../dto/regionCreator";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class BackendRegionService 
{
  private errorMessage:string="Error ! : ";
  
  constructor(private http: HttpClient) 
  {
  }

  getRegion(id:number):Observable<RegionTO>
  {
    return this.http.get<RegionTO>('api/region/'+id);
  }

  getRegions():Observable<Array<RegionTO>>
  {
    return this.http.get<Array<RegionTO>>('api/region');
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