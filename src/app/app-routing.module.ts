import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SelectionComponent} from './components/selection/selection.component';
import {TownComponent} from './components/town/town.component';
import {CreatorComponent} from './components/creator/creator.component';
import {NotFoundComponent} from './components/not-found/not-found.component';


const routes: Routes = 
[
  { path: 'get', component: SelectionComponent },
  { path: 'get/:id',component:TownComponent},
  { path:'post',component:CreatorComponent},
  { path:'not-found',component:NotFoundComponent},
  { path: '', redirectTo:'get', pathMatch: 'full' },
  { path:'**',redirectTo:'not-found',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
