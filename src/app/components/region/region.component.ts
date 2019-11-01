import { Component, OnInit, Input } from '@angular/core';
import {Region} from '../../dto/region';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  @Input()region: Region;
  constructor() { }

  ngOnInit() {}
}
