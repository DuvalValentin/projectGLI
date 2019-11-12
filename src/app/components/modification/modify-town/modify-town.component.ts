import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
import {Region} from '../../../dto/region';
import {Department} from '../../../dto/department';
import {BackendTownService} from '../../../service/backend-town.service';
import {Town} from '../../../dto/town';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-modify-town',
  templateUrl: './modify-town.component.html'
})
export class ModifyTownComponent implements OnInit {

  initialTown:Town
  townForm:FormGroup;
  selectedRegion:Region;
  selectedDepartment:Department;

  constructor
  (
    private backendTown:BackendTownService,
    private formBuilder:FormBuilder,
    private route : ActivatedRoute,
    private router:Router
  ) 
  {
  }

  ngOnInit() 
  {
    this.backendTown.getTown(this.route.snapshot.params["id"]).subscribe((t)=>
    {
      this.initialTown=t;
      this.initForm();
    })
    
  }

  onSelectRegion(region:Region)
  {
    this.selectedRegion=region;
    this.selectedDepartment=null;
  }

  onSelectDepartment(department:Department)
  {
    this.selectedDepartment=department;
  }

  private initForm()
  {
    this.townForm=this.formBuilder.group
    ({
      name:this.initialTown.name
    })
  }
  onSubmitForm() 
  {
    const formValue = this.townForm.value;
    const town = new Town
    (
      this.initialTown.id,
      formValue['name'],
      this.selectedDepartment.id,
      this.initialTown.idSports
    );
    this.backendTown.putTown(town).subscribe
    (
      ()=>
      {
        console.log("Ville modifiée");
        this.router.navigate(["/put"]);
      },
      (error)=>
      {
        console.error("ERROR : "+error);
      });
  }

}
