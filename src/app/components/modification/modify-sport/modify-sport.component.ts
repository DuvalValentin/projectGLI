import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
import {Town} from '../../../dto/town';
import {BackendSportService} from '../../../service/backend-sport.service';
import {Router, ActivatedRoute} from '@angular/router';
import {SportCreator} from '../../../dto/sportCreator';
import {Sport} from '../../../dto/sport';
import {BackendTownService} from '../../../service/backend-town.service';

@Component({
  selector: 'app-modify-sport',
  templateUrl: './modify-sport.component.html'
})
export class ModifySportComponent implements OnInit {

  initialSport:Sport;
  sportForm:FormGroup;
  towns:Array<Town>;
  selectedTown:Town;

  constructor
  (
    private backendSport:BackendSportService,
    private backendTown:BackendTownService,
    private formBuilder:FormBuilder,
    private router:Router,
    private route:ActivatedRoute
  )
  {}

  ngOnInit() 
  {
    let id:number = this.route.snapshot.params["id"];
    this.backendSport.getSport(id).subscribe((s)=>
    {
      this.initialSport=s;
    })
    this.backendTown.getTownsBySportId(id).subscribe((ts)=>
    {
      this.towns=ts;
    })
    this.initForm();
  }

  private initForm()
  {
    this.sportForm=this.formBuilder.group
    ({
      name:''
    });
  }

  onSubmitForm() 
  {
    const formValue = this.sportForm.value;
    let townsId:Array<number>=new Array<number>();
    for (var town of this.towns) {
      townsId.push(town.id);
    }
    const sport = new Sport
    (
      this.initialSport.id,
      formValue['name'],
      townsId
    );
    this.backendSport.putSport(sport).subscribe
    (
      (s)=>{console.log("Sport modifié : " +s);},
      (error)=>{console.error('Error : '+error)}
    );
    this.router.navigate(["/put"])
  }
  onSelectTown(town:Town)
  {
    this.selectedTown=town;
  }

  addTown()
  {
    if(this.towns.indexOf(this.selectedTown)===-1)
    {
      this.towns.push(this.selectedTown);
    }
  }

  removeTown(town:Town)
  {
    this.towns.splice(this.towns.indexOf(town),1);
  }

}
