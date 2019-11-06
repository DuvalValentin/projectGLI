import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import {BackendDepartmentService} from '../../service/backend-department.service';
import {Department} from '../../model/department';
import {Mapper} from '../../service/mapper.service';

@Component({
  selector: 'app-select-department',
  templateUrl: './select-department.component.html',
  styleUrls: ['./select-department.component.css']
})
export class SelectDepartmentComponent implements OnInit,OnChanges
{
  
  departments:Array<Department>;
  selectedDepartment:Department;
  @Input() regionId:number;
  @Output()departmentOut = new EventEmitter<Department>();

  constructor(private backendDepartment: BackendDepartmentService,private mapper :Mapper)
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
    this.backendDepartment.getDepartmentsByRegionId(this.regionId).subscribe((e)=>
    {
      this.departments=this.mapper.arrayDepartmentTOToArrayDepartment(e);
    })
  }
}