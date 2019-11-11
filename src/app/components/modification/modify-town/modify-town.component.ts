import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
import {Region} from '../../../model/region';
import {Department} from '../../../model/department';
import {BackendTownService} from '../../../service/backend-town.service';
import {TownTO} from '../../../dto/town';
import {Town} from '../../../model/town';
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
      this.initialTown=new Town(t);
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
    const townTO = new TownTO
    (
      this.initialTown.id,
      formValue['name'],
      this.selectedDepartment.id,
      this.initialTown.idSports
    );
    this.backendTown.putTown(townTO).subscribe
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
