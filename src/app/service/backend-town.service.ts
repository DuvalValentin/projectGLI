import {Injectable} from "@angular/core";

import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";

import {Town} from "../dto/town";

import {TownCreator} from "../dto/townCreator";

@Injectable({providedIn: 'root'})
export class BackendTownService
{
  private errorMessage: string="Error ! : ";

  constructor(private http: HttpClient) {}

  getTown(id: number): Observable<Town>
  {
    return this.http.get<Town>('api/ville/'+id);
  }

  getTowns(): Array<Town>
  {
    let towns: Array<Town>=new Array();
    this.http.get<Town[]>('api/ville').subscribe((e) =>
    {
      e.forEach((element: Town) =>
      {
        towns.push(element);
      });
    });
    return towns;
  }

  getTownsByDepartmentId(departmentId: number): Array<Town>
  {
    let towns: Array<Town>=new Array();
    this.http.get<Town[]>('api/ville/byDepartmentId/'+departmentId).subscribe((e) =>
    {
      e.forEach((element: Town) =>
      {
        towns.push(element);
      });
    });
    return towns;
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
}