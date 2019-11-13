import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
import {BackendSportService} from '../../../service/backend-sport.service';
import {Router} from '@angular/router';
import {SportCreator} from '../../../dto/sportCreator';
import {Town} from '../../../dto/town';

@Component({
  selector: 'app-sport-adder',
  templateUrl: './sport-adder.component.html'
})
export class SportAdderComponent implements OnInit {

  sportForm:FormGroup;
  towns:Array<Town>;
  selectedTown:Town;

  constructor
  (
    private backendSport:BackendSportService,
    private formBuilder:FormBuilder,
    private router:Router
  )
  {}

  ngOnInit() 
  {
    this.initForm();
  }

  private initForm()
  {
    this.sportForm=this.formBuilder.group
    ({
      name:''
    });
    this.towns=new Array<Town>();
  }

  onSubmitForm() 
  {
    const formValue = this.sportForm.value;
    let townsId:Array<number>=new Array<number>();
    for (var town of this.towns) {
      townsId.push(town.id);
    }
    const sportCreator = new SportCreator
    (
      formValue['name'],
      townsId
    );
    this.backendSport.postSport(sportCreator).subscribe
    (
      ()=>{console.log("Sport créé");},
      (error)=>{console.error('Error : '+error)}
    );
    this.router.navigate(["/post"])
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