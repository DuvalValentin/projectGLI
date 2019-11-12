import { Component, OnInit } from '@angular/core';
import {BackendRegionService} from '../../../service/backend-region.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Region} from '../../../dto/region';

@Component({
  selector: 'app-modify-region',
  templateUrl: './modify-region.component.html'
})
export class ModifyRegionComponent implements OnInit 
{
  initialRegion : Region;
  regionForm : FormGroup

  constructor
  (
    private backendRegion: BackendRegionService,
    private formBuilder: FormBuilder,
    private route : ActivatedRoute,
    private router:Router
  ) 
  {
    this.backendRegion.getRegion(this.route.snapshot.params["id"]).subscribe((r)=>{
      this.initialRegion=r;
    })
  }

  ngOnInit() 
  {
    this.initForm();
  }

  private initForm()
  {
    this.regionForm=this.formBuilder.group
    ({
      name:""
    });
  }

  onSubmitForm()
  {
    const formValue=this.regionForm.value;
    const region:Region=new Region
    (
      this.initialRegion.id,
      formValue['name'],
      this.initialRegion.idDepartements
    )
    this.backendRegion.putRegion(region).subscribe
    (
      (r)=>
      {
        console.log("Modification effectuée : "+r)
        this.router.navigate(["/put"]);

      },
      (error)=>
      {
        console.error("Error : "+error)
      }
    )
  }

}
