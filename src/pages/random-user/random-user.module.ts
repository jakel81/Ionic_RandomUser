import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RandomUserPage } from './random-user';

@NgModule({
  declarations: [
    RandomUserPage,
  ],
  imports: [
    IonicPageModule.forChild(RandomUserPage),
  ],
})
export class RandomUserPageModule {}
