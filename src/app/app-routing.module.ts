import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SelectionComponent} from './components/selection/selection.component';
import {TownComponent} from './components/town/town.component';
import {CreatorComponent} from './components/creator/creator.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {DepartmentComponent} from './components/department/department.component';
import {RegionComponent} from './components/region/region.component';
import {TownAdderComponent} from './components/town-adder/town-adder.component';
import {DepartmentAdderComponent} from './components/department-adder/department-adder.component';
import {RegionAdderComponent} from './components/region-adder/region-adder.component';
import {DeleteComponent} from './components/delete/delete.component';
import {DeleteRegionComponent} from './components/delete-region/delete-region.component';
import {DeleteDepartmentComponent} from './components/delete-department/delete-department.component';
import {DeleteTownComponent} from './components/delete-town/delete-town.component';


const routes: Routes = 
[
  { path: 'get', component: SelectionComponent },
  { path: 'get/town/:id',component:TownComponent},
  { path: 'get/department/:id',component:DepartmentComponent},
  { path: 'get/region/:id',component:RegionComponent},
  { path:'post',component:CreatorComponent},
  { path:'post/town',component:TownAdderComponent},
  { path:'post/department',component:DepartmentAdderComponent},
  { path:'post/region',component:RegionAdderComponent},
  { path:'delete',component:DeleteComponent},
  { path:'delete/region/:id', component:DeleteRegionComponent},
  { path:'delete/department/:id',component:DeleteDepartmentComponent},
  { path:'delete/town/:id',component:DeleteTownComponent},
  { path:'not-found',component:NotFoundComponent},
  { path: '', redirectTo:'get', pathMatch: 'full' },
  { path:'**',redirectTo:'not-found',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
