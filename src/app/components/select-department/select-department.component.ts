import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {BackendDepartmentService} from '../../service/backend-department.service';
import {Department} from '../../model/department';
import {Mapper} from '../../service/mapper.service';

@Component({
  selector: 'app-select-department',
  templateUrl: './select-department.component.html',
  styleUrls: ['./select-department.component.css']
})
export class SelectDepartmentComponent implements OnInit 
{
  departments:Array<Department>;
  selectedDepartment:Department;
  @Output()departmentOut = new EventEmitter<Department>();

  constructor(private backendDepartment: BackendDepartmentService,private mapper :Mapper)
  {
    this.backendDepartment.getDepartments().subscribe((e)=>
    {
      this.departments=mapper.arrayDepartmentTOToArrayDepartment(e);
    })
  }

  ngOnInit() 
  {
  }

  onSelectDepartment()
  {
    this.departmentOut.emit(this.selectedDepartment);
  }
}