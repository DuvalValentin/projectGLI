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
import { SelectRegionComponent } from './components/select-region/select-region.component';
import { SelectDepartmentComponent } from './components/select-department/select-department.component';
import { SelectTownComponent } from './components/select-town/select-town.component';
import { DepartmentAdderComponent } from './components/department-adder/department-adder.component';
import { RegionAdderComponent } from './components/region-adder/region-adder.component';
import { SeparationComponent } from './components/separation/separation.component';
import { DeleteComponent } from './components/delete/delete.component';
import { DeleteRegionComponent } from './components/delete-region/delete-region.component';
import { DeleteDepartmentComponent } from './components/delete-department/delete-department.component';
import { DeleteTownComponent } from './components/delete-town/delete-town.component';



@NgModule({
  declarations: [
    AppComponent,
    TownComponent,
    RegionComponent,
    DepartmentComponent,
    TownAdderComponent,
    CreatorComponent,
    SelectionComponent,
    NotFoundComponent,
    SelectRegionComponent,
    SelectDepartmentComponent,
    SelectTownComponent,
    DepartmentAdderComponent,
    RegionAdderComponent,
    SeparationComponent,
    DeleteComponent,
    DeleteRegionComponent,
    DeleteDepartmentComponent,
    DeleteTownComponent
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