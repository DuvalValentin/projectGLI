import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {AuthentificationService} from '../../../service/authentification.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html'
})
export class AuthentificationComponent implements OnInit {

  isAuth:boolean;
  return:string;

  constructor
  (
    private authentificationService:AuthentificationService,
    private router:Router,
    private route :ActivatedRoute,
  ) 
  {
    this.setParameters();
  }

  ngOnInit() 
  { 
  }

  connect()
  {
    this.authentificationService.connect();
    this.router.navigateByUrl(this.return);
  }

  disconnect()
  {
    this.authentificationService.disconnect();
    this.router.navigateByUrl(this.return);
    this.setParameters();// au cas ou on reroute ici
  }

  setParameters()
  {
    this.isAuth=this.authentificationService.isAuth;
    this.return=this.route.snapshot.queryParams['returnUrl'] || '/'; 
  }
}