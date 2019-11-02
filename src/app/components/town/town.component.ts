import { Component, OnInit } from '@angular/core';
import {Town} from '../../dto/town';
import {ActivatedRoute} from '@angular/router';
import {Department} from '../../dto/department';
import {BackendTownService} from '../../service/backend-town.service';

@Component({
  selector: 'app-town',
  templateUrl: './town.component.html',
  styleUrls: ['./town.component.css']
})
export class TownComponent implements OnInit 
{
  town: Town;
  departement: Department;

  constructor(private backendTown:BackendTownService,private route: ActivatedRoute)
  {
    let id:number = this.route.snapshot.params['id']
    this.backendTown.getTown(id).subscribe((e)=>
    {
      this.town=e;
    });
  }

  ngOnInit() 
  {
    
  }
}