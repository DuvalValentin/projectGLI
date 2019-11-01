import { Component, OnInit, Input } from '@angular/core';
import {Town} from '../../dto/town';

@Component({
  selector: 'app-town',
  templateUrl: './town.component.html',
  styleUrls: ['./town.component.css']
})
export class TownComponent implements OnInit 
{
  @Input()town: Town;

  ngOnInit() 
  {

  }
}