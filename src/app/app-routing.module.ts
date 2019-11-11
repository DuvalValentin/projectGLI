import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GuardService} from './service/guard.service';
import {SelectionComponent} from './components/selection/selection.component';
import {TownComponent} from './components/elementsDisplayer/town/town.component';
import {CreatorComponent} from './components/creation/creator.component';
import {NotFoundComponent} from './components/special/not-found/not-found.component';
import {DepartmentComponent} from './components/elementsDisplayer/department/department.component';
import {RegionComponent} from './components/elementsDisplayer/region/region.component';
import {TownAdderComponent} from './components/creation/town-adder/town-adder.component';
import {DepartmentAdderComponent} from './components/creation/department-adder/department-adder.component';
import {RegionAdderComponent} from './components/creation/region-adder/region-adder.component';
import {DeleteComponent} from './components/deletion/delete.component';
import {DeleteRegionComponent} from './components/deletion/delete-region/delete-region.component';
import {DeleteDepartmentComponent} from './components/deletion/delete-department/delete-department.component';
import {DeleteTownComponent} from './components/deletion/delete-town/delete-town.component';
import {AuthentificationComponent} from './components/special/authentification/authentification.component';
import {ModifyRegionComponent} from './components/modification/modify-region/modify-region.component';
import {ModificationComponent} from './components/modification/modification.component';
import {ModifyDepartmentComponent} from './components/modification/modify-department/modify-department.component';
import {ModifyTownComponent} from './components/modification/modify-town/modify-town.component';



const routes: Routes = 
[
  { path: 'get', component: SelectionComponent },
  { path: 'get/town/:id',component:TownComponent},
  { path: 'get/department/:id',component:DepartmentComponent},
  { path: 'get/region/:id',component:RegionComponent},
  { path:'post', component:CreatorComponent},
  { path:'post/town',canActivate:[GuardService],component:TownAdderComponent},
  { path:'post/department',canActivate:[GuardService],component:DepartmentAdderComponent},
  { path:'post/region',canActivate:[GuardService],component:RegionAdderComponent},
  { path:'delete',component:DeleteComponent},
  { path:'delete/region/:id',canActivate:[GuardService], component:DeleteRegionComponent},
  { path:'delete/department/:id',canActivate:[GuardService],component:DeleteDepartmentComponent},
  { path:'delete/town/:id',canActivate:[GuardService],component:DeleteTownComponent},
  { path: 'put',component:ModificationComponent},
  { path:'put/region/:id',canActivate:[GuardService],component:ModifyRegionComponent},
  { path:'put/department/:id',canActivate:[GuardService],component:ModifyDepartmentComponent},
  { path:'put/town/:id',canActivate:[GuardService],component:ModifyTownComponent},
  { path:'auth',component:AuthentificationComponent},
  { path:'not-found',component:NotFoundComponent},
  { path: '', redirectTo:'get', pathMatch: 'full' },
  { path:'**',redirectTo:'not-found',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation:"reload"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
