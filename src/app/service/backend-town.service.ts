import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";

import {TownTO} from "../dto/town";
import {TownCreator} from "../dto/townCreator";

@Injectable({providedIn: 'root'})
export class BackendTownService
{
  private errorMessage: string="Error ! : ";

  constructor(private http: HttpClient) {}

  getTown(id: number): Observable<TownTO>
  {
    return this.http.get<TownTO>('api/ville/'+id);
  }

  getTowns(): Observable<Array<TownTO>>
  {
    return this.http.get<Array<TownTO>>('api/ville');
  }

  getTownsByDepartmentId(departmentId: number): Observable<Array<TownTO>>
  {
    return this.http.get<Array<TownTO>>('api/ville/byDepartmentId/'+departmentId);
  }

  postTown(townCreator: TownCreator)
  {
    this.http.post('api/ville',townCreator)
      .subscribe
      (
        () => {console.log("Ville créée");},
        (error) => {console.log(this.errorMessage+error);}
      );
  }
  deleteTown(townId:number):Observable<any>
  {
    return this.http.delete('api/ville/'+townId);
  }
}