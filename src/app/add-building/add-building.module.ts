import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBuildingPageRoutingModule } from './add-building-routing.module';

import { AddBuildingPage } from './add-building.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddBuildingPageRoutingModule
  ],
  declarations: [AddBuildingPage]
})
export class AddBuildingPageModule {}
