import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {BackendSportService} from '../../../service/backend-sport.service';

@Component({
  selector: 'app-delete-sport',
  templateUrl: './delete-sport.component.html'
})
export class DeleteSportComponent implements OnInit {

  private sportId:number;

  constructor
  (
    private route:ActivatedRoute,
    private router:Router,
    private backendSport:BackendSportService
  ) 
  {

  }
  ngOnInit()
  {
    let sportId:number=this.route.snapshot.params["id"];
    this.backendSport.deleteSport(sportId).subscribe
    (
      ()=>
      {
        console.log("Sport supprimé");
        this.router.navigate(["/"]);
      },
      (error)=>{console.error("Error : "+error)}
    );

  }

}
