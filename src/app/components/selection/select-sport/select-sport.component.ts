import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import {Sport} from '../../../dto/sport';
import {Department} from '../../../dto/department';
import {BackendSportService} from '../../../service/backend-sport.service';

@Component({
  selector: 'app-select-sport',
  templateUrl: './select-sport.component.html'
})
export class SelectSportComponent implements OnInit,OnChanges 
{
  sports:Array<Sport>;
  selectedSport:Sport;
  @Input()townId:number;
  @Output()sportOut:EventEmitter<Sport>=new EventEmitter<Sport>();
  

  constructor(private backendSport:BackendSportService) 
  {

  }

  ngOnInit() 
  {
    this.getSports();
  }

  ngOnChanges()
  {
    this.getSports();
    this.selectedSport=null;
  }

  onSelectSport()
  {
    this.sportOut.emit(this.selectedSport);
  }

  getSports()
  {
    if(this.townId!=0)
    {
      this.backendSport.getSportsByTownId(this.townId).subscribe((ss)=>
      {
        this.sports=ss;
      })
    }
    else
    {
      this.backendSport.getSports().subscribe((ss)=>
      {
        this.sports=ss;
      })
    }
    

  }

}