import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {BackendRegionService} from '../../service/backend-region.service';

@Component({
  selector: 'app-delete-region',
  templateUrl: './delete-region.component.html'
})
export class DeleteRegionComponent implements OnInit 
{
  private regionId:number;

  constructor
  (
    private route:ActivatedRoute,
    private router:Router,
    private backendRegion:BackendRegionService
  ) 
  {
    this.regionId=this.route.snapshot.params["id"];
  }

  ngOnInit() 
  {
    this.backendRegion.deleteRegion(this.regionId).subscribe
    (
      ()=>
      {
        console.log("Région supprimée");
        this.router.navigate(["/"]);
      },
      (error)=>{console.error("Error : "+error)}
    );
  }
}