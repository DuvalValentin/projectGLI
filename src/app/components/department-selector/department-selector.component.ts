import { Component, OnInit } from '@angular/core';
import {Department} from '../../dto/department';
import {BackendAccessService} from '../../service/backend-access.service';

@Component({
  selector: 'app-department-selector',
  templateUrl: './department-selector.component.html',
  styleUrls: ['./department-selector.component.css']
})
export class DepartmentSelectorComponent implements OnInit 
{
  departments:Array<Department>
  constructor(private backendAccess: BackendAccessService)
  {
    this.departments=backendAccess.getDepartments();
  }

  ngOnInit() 
  {
  }
}