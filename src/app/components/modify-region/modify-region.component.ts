import { Component, OnInit } from '@angular/core';
import {BackendRegionService} from '../../service/backend-region.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Region} from '../../model/region';
import {RegionTO} from '../../dto/region';

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
    private route : ActivatedRoute
  ) 
  {
    this.backendRegion.getRegion(this.route.snapshot.params["id"]).subscribe((r)=>{
      this.initialRegion=new Region(r);
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
    const regionTO:RegionTO=new RegionTO
    (
      this.initialRegion.id,
      formValue['name'],
      this.initialRegion.idDepartments
    )
    this.backendRegion.putRegion(regionTO).subscribe
    (
      (r)=>
      {
        console.log("Modification effectuée : "+r)
      },
      (error)=>
      {
        console.error("Error : "+error)
      }
    )
  }

}
