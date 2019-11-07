import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {BackendTownService} from '../../service/backend-town.service';

@Component({
  selector: 'app-delete-town',
  templateUrl: './delete-town.component.html'
})
export class DeleteTownComponent implements OnInit {

  private townId:number;
  constructor
  (
    private route:ActivatedRoute,
    private router:Router,
    private backendTown:BackendTownService
  ) 
  {
    this.townId=this.route.snapshot.params["id"];
  }

  ngOnInit() 
  {
    this.backendTown.deleteTown(this.townId)
    .subscribe
    (
      ()=>
      {
        console.log("Ville supprimée");
        this.router.navigate(["/"]);
      },
      (error)=>
      {
        console.error("Error : "+error);
      }
    );
  }

}
