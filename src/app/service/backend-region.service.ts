import {Injectable} from "@angular/core";

import {HttpClient} from "@angular/common/http";

import {Region} from "../dto/region";
import {RegionCreator} from "../dto/regionCreator";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class BackendRegionService 
{
  private readonly adress:string='api/region/';
  
  constructor(private http: HttpClient) 
  {
  }

  getRegion(id:number):Observable<Region>
  {
    return this.http.get<Region>(this.adress+id);
  }

  getRegions():Observable<Array<Region>>
  {
    return this.http.get<Array<Region>>(this.adress);
  }

  postRegion(regionCreator:RegionCreator):Observable<Region>
  {
    return this.http.post<Region>(this.adress,regionCreator);
  }

  putRegion(region:Region):Observable<Region>
  {
    return this.http.put<Region>(this.adress,region);
  }

  deleteRegion(id:number):Observable<any>
  {
    return this.http.delete(this.adress+id);
  }
}