import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBuildingPage } from './add-building.page';

const routes: Routes = [
  {
    path: '',
    component: AddBuildingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddBuildingPageRoutingModule {}
