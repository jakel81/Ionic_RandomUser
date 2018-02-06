import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VelibMapPage } from './velib-map';

@NgModule({
  declarations: [
    VelibMapPage,
  ],
  imports: [
    IonicPageModule.forChild(VelibMapPage),
  ],
})
export class VelibMapPageModule {}
