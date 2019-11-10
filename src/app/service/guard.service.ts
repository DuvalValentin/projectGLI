import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {Injectable} from '@angular/core';
import {AuthentificationService} from './authentification.service';

@Injectable()
export class GuardService implements CanActivate {

  constructor(private router:Router,private authentificationService:AuthentificationService){}
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean 
  {
    if(this.authentificationService.isAuth)
    {
      return true;
    }
    else
    {
      this.router.navigate(["/auth"],{queryParams:{returnUrl: state.url}});
      return false;
    }
  }
} 