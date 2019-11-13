import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import {BackendDepartmentService} from '../../../service/backend-department.service';
import {Department} from '../../../dto/department';

@Component({
  selector: 'app-select-department',
  templateUrl: './select-department.component.html'
})
export class SelectDepartmentComponent implements OnInit,OnChanges
{
  
  departments:Array<Department>;
  selectedDepartment:Department;
  @Input() regionId:number;
  @Output()departmentOut:EventEmitter<Department> = new EventEmitter<Department>();

  constructor(private backendDepartment: BackendDepartmentService)
  {
    
  }

  ngOnInit():void
  {
    this.getDepartments();
  }

  ngOnChanges(): void
  {
    this.getDepartments();
    this.selectedDepartment=null;
  }

  onSelectDepartment():void
  {
    this.departmentOut.emit(this.selectedDepartment);
  }

  private getDepartments():void
  {
    this.backendDepartment.getDepartmentsByRegionId(this.regionId).subscribe((ds)=>
    {
      this.departments=ds;
    })
  }
}