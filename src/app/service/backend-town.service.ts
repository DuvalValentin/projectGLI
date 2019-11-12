import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";

import {Town} from "../dto/town";
import {TownCreator} from "../dto/townCreator";

@Injectable({providedIn: 'root'})
export class BackendTownService
{
  private readonly adress:string='api/ville/';

  constructor(private http: HttpClient) {}

  getTown(id: number): Observable<Town>
  {
    return this.http.get<Town>(this.adress+id);
  }

  getTowns(): Observable<Array<Town>>
  {
    return this.http.get<Array<Town>>(this.adress);
  }

  getTownsByDepartmentId(departmentId: number): Observable<Array<Town>>
  {
    return this.http.get<Array<Town>>(this.adress+'byDepartmentId/'+departmentId);
  }

  postTown(townCreator: TownCreator):Observable<Town>
  {
    return this.http.post<Town>(this.adress,townCreator);
  }

  putTown(town:Town):Observable<Town>
  {
    return this.http.put<Town>(this.adress,town);
  }

  deleteTown(townId:number):Observable<any>
  {
    return this.http.delete(this.adress+townId);
  }
}