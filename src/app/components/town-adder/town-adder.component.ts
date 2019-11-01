import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import {BackendAccessService} from '../../service/backend-access.service';
import {Department} from '../../dto/department';
import {Town} from '../../dto/town';

@Component({
  selector: 'app-town-adder',
  templateUrl: './town-adder.component.html',
  styleUrls: ['./town-adder.component.css']
})
export class TownAdderComponent implements OnInit {

  townForm:FormGroup;
  departments:Department[]

  constructor(private backendAccess: BackendAccessService,private formBuilder:FormBuilder) 
  {
    this.departments=backendAccess.getDepartments();
  }

  ngOnInit() 
  {
    this.initForm();
  }

  initForm()
  {
    this.townForm=this.formBuilder.group
    ({
      name:'',
      departmentId:0
    })
  }
  onSubmitForm() 
  {
    const formValue = this.townForm.value;
    const town = new Town
    (
      formValue['name'],
      formValue['departmentId']
    );
    //FIXME pas le bon id ici
    this.backendAccess.postTown(town);
  }

}
