import { Component, OnInit } from '@angular/core';
import {Town} from '../../../dto/town';
import {BackendTownService} from '../../../service/backend-town.service';
import {ActivatedRoute,Router} from '@angular/router';
import {Sport} from '../../../dto/sport';
import {BackendSportService} from '../../../service/backend-sport.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html'
})
export class SportComponent implements OnInit 
{
  sport:Sport;
  towns:Array<Town>;

  constructor
  (
    private backendSport:BackendSportService,
    private backendTown:BackendTownService,
    private route: ActivatedRoute,
    private router:Router
  ) 
  { }

  ngOnInit() 
  {
    let id=this.route.snapshot.params["id"];
    this.backendSport.getSport(id).subscribe(
      (s)=>
      {
        this.sport=s;
      },
      (error)=>
      {
        this.router.navigate(["/not-found"]);
      }
    )
    this.backendTown.getTownsBySportId(id).subscribe((ts)=>{
      this.towns=ts;
    });
  }

  suppress()
  {
    this.router.navigate(["/delete/sport/"+this.sport.id]);
  }

  modify()
  {
    this.router.navigate(["/put/sport/"+this.sport.id]);
  }

}
