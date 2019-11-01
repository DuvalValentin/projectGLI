import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BackendAccessService } from './service/backend-access.service';

import { TownSelectorComponent } from './components/town-selector/town-selector.component';
import { TownComponent } from './components/town/town.component';
import { RegionSelectorComponent } from './components/region-selector/region-selector.component';
import { RegionComponent } from './components/region/region.component';
import { DepartmentSelectorComponent } from './components/department-selector/department-selector.component';
import { DepartmentComponent } from './components/department/department.component';
import { TownAdderComponent } from './components/town-adder/town-adder.component';
import { SelectorComponent } from './components/selector/selector.component';
import { CreatorComponent } from './components/creator/creator.component';
import { SelectionComponent } from './components/selection/selection.component';

const routes:Routes = 
[
  { path: 'get', component: SelectionComponent },
  { path:'post',component:CreatorComponent},
  { path: '', component: SelectionComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    TownSelectorComponent,
    TownComponent,
    RegionSelectorComponent,
    RegionComponent,
    DepartmentSelectorComponent,
    DepartmentComponent,
    TownAdderComponent,
    SelectorComponent,
    CreatorComponent,
    SelectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BackendAccessService],
  bootstrap: [AppComponent]
})
export class AppModule { }