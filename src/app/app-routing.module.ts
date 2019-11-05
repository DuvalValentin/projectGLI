import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SelectionComponent} from './components/selection/selection.component';
import {TownComponent} from './components/town/town.component';
import {CreatorComponent} from './components/creator/creator.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {DepartmentComponent} from './components/department/department.component';
import {RegionComponent} from './components/region/region.component';
import {TownAdderComponent} from './components/town-adder/town-adder.component';


const routes: Routes = 
[
  { path: 'get', component: SelectionComponent },
  { path: 'get/town/:id',component:TownComponent},
  { path: 'get/department/:id',component:DepartmentComponent},
  { path: 'get/region/:id',component:RegionComponent},
  { path:'post',component:CreatorComponent},
  { path:'post/town',component:TownAdderComponent},
  { path:'not-found',component:NotFoundComponent},
  { path: '', redirectTo:'get', pathMatch: 'full' },
  { path:'**',redirectTo:'not-found',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
