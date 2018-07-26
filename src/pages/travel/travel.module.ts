import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TravelPage } from './travel';
import { ComponentsModule } from '../../components/components.module'
@NgModule({
  declarations: [
    TravelPage,
  ],
  imports: [
    IonicPageModule.forChild(TravelPage),
    ComponentsModule,
  ],
})
export class TravelPageModule {}
