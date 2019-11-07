import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {BackendDepartmentService} from '../../service/backend-department.service';

@Component({
  selector: 'app-delete-department',
  templateUrl: './delete-department.component.html'
})
export class DeleteDepartmentComponent implements OnInit 
{
  private departmentId:number;

  constructor
  (
    private route:ActivatedRoute,
    private router:Router,
    private backendDepartment:BackendDepartmentService
  )
  {
    this.departmentId=this.route.snapshot.params["id"];
  }

  ngOnInit() 
  {
    this.backendDepartment.deleteDepartment(this.departmentId).subscribe
    (
      ()=>
      {
        console.log("Département supprimé");
        this.router.navigate(["/"]);
      }),
      (error)=>
      {
        console.error("EkkiEkkiTappang");
        console.error("Error : "+error);
      }
  }

}