import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VelibPage } from './velib';

@NgModule({
  declarations: [
    VelibPage,
  ],
  imports: [
    IonicPageModule.forChild(VelibPage),
  ],
})
export class VelibPageModule {}
