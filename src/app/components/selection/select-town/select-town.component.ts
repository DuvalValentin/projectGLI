import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import {Town} from '../../../dto/town';
import {BackendTownService} from '../../../service/backend-town.service';

@Component({
  selector: 'app-select-town',
  templateUrl: './select-town.component.html'
})
export class SelectTownComponent implements OnInit,OnChanges
{
  
  towns:Array<Town>;
  selectedTown:Town;
  @Output()townOut=new EventEmitter<Town>();
  @Input() departmentId:number;

  constructor
  (
    private backendTown: BackendTownService
  ) 
  {
    
  }
  ngOnInit() 
  {
    this.getTowns()
  }
  ngOnChanges(): void
  {
    this.getTowns()
    this.selectedTown=null;
  }

  onSelectTown()
  {
    this.townOut.emit(this.selectedTown);
  }

  getTowns():void
  {
    this.backendTown.getTownsByDepartmentId(this.departmentId).subscribe((ts)=>{
      this.towns=ts;
    })
  }

}
