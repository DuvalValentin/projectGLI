import { Component, OnInit } from '@angular/core';
import {Department} from '../../dto/department';
import {BackendDepartmentService} from '../../service/backend-department.service';

@Component({
  selector: 'app-department-selector',
  templateUrl: './department-selector.component.html',
  styleUrls: ['./department-selector.component.css']
})
export class DepartmentSelectorComponent implements OnInit 
{
  departments:Array<Department>
  constructor(private backendDepartment: BackendDepartmentService)
  {
    this.departments=this.backendDepartment.getDepartments();
  }

  ngOnInit() 
  {
  }
}