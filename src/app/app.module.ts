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

import { TownComponent } from './components/elementsDisplayer/town/town.component';
import { RegionComponent } from './components/elementsDisplayer/region/region.component';
import { DepartmentComponent } from './components/elementsDisplayer/department/department.component';
import { TownAdderComponent } from './components/creation/town-adder/town-adder.component';
import { CreatorComponent } from './components/creation/creator.component';
import { SelectionComponent } from './components/selection/selection.component';
import { NotFoundComponent } from './components/special/not-found/not-found.component';
import { SelectRegionComponent } from './components/selection/select-region/select-region.component';
import { SelectDepartmentComponent } from './components/selection/select-department/select-department.component';
import { SelectTownComponent } from './components/selection/select-town/select-town.component';
import { DepartmentAdderComponent } from './components/creation/department-adder/department-adder.component';
import { RegionAdderComponent } from './components/creation/region-adder/region-adder.component';
import { SeparationComponent } from './components/special/separation/separation.component';
import { DeleteComponent } from './components/deletion/delete.component';
import { DeleteRegionComponent } from './components/deletion/delete-region/delete-region.component';
import { DeleteDepartmentComponent } from './components/deletion/delete-department/delete-department.component';
import { DeleteTownComponent } from './components/deletion/delete-town/delete-town.component';
import { AuthentificationService } from './service/authentification.service';
import { GuardService } from './service/guard.service';
import { AuthentificationComponent } from './components/special/authentification/authentification.component';
import { NavbarComponent } from './components/special/navbar/navbar.component';
import { ModifyRegionComponent } from './components/modification/modify-region/modify-region.component';
import { ModificationComponent } from './components/modification/modification.component';
import { ModifyDepartmentComponent } from './components/modification/modify-department/modify-department.component';
import { ModifyTownComponent } from './components/modification/modify-town/modify-town.component';



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
    DeleteTownComponent,
    AuthentificationComponent,
    NavbarComponent,
    ModifyRegionComponent,
    ModificationComponent,
    ModifyDepartmentComponent,
    ModifyTownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    BackendTownService,
    BackendDepartmentService,
    BackendRegionService,
    Mapper,
    AuthentificationService,
    GuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }