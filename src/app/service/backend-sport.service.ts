import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {Sport} from "../dto/sport";
import {SportCreator} from "../dto/sportCreator";

@Injectable({providedIn: 'root'})
export class BackendSportService
{
  private readonly adress:string='api/sport/';
  constructor(private http: HttpClient) 
  {
  }

  getSport(id:number):Observable<Sport>
  {
    return this.http.get<Sport>(this.adress+id);
  }

  getSports():Observable<Array<Sport>>
  {
    return this.http.get<Array<Sport>>(this.adress);
  }

  postSport(sport:SportCreator):Observable<Sport>
  {
    return this.http.post<Sport>(this.adress,sport);
  }

  putSport(sport:Sport):Observable<Sport>
  {
    return this.http.put<Sport>(this.adress,sport);
  }

  delete(id:number):Observable<any>
  {
    return this.http.delete<any>(this.adress);
  }
}