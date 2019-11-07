import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../service/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html'
})
export class AuthentificationComponent implements OnInit {

  isAuth:boolean;

  constructor(private authentificationService:AuthentificationService,private router:Router) 
  {
    this.isAuth=this.authentificationService.isAuth;
  }

  ngOnInit() 
  {
  }

  connect()
  {
    this.authentificationService.connect();
    this.router.navigate(["/"]);
  }

  disconnect()
  {
    this.authentificationService.disconnect();
    this.router.navigate(["/"]);
  }

}
