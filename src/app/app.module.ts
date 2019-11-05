import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BackendTownService} from './service/backend-town.service';
import {BackendDepartmentService} from './service/backend-department.service';
import {BackendRegionService} from './service/backend-region.service';
import {Mapper} from './service/mapper.service';

import { TownComponent } from './components/town/town.component';
import { RegionComponent } from './components/region/region.component';
import { DepartmentComponent } from './components/department/department.component';
import { TownAdderComponent } from './components/town-adder/town-adder.component';
import { CreatorComponent } from './components/creator/creator.component';
import { SelectionComponent } from './components/selection/selection.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    TownComponent,
    RegionComponent,
    DepartmentComponent,
    TownAdderComponent,
    CreatorComponent,
    SelectionComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BackendTownService,BackendDepartmentService,BackendRegionService,Mapper],
  bootstrap: [AppComponent]
})
export class AppModule { }