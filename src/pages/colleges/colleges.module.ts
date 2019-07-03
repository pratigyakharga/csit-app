import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollegesPage } from './colleges';

@NgModule({
  declarations: [
    CollegesPage,
  ],
  imports: [
    IonicPageModule.forChild(CollegesPage),
  ],
})
export class CollegesPageModule {}
