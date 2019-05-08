import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UnitTestPage } from './unit-test';

@NgModule({
  declarations: [
    UnitTestPage,
  ],
  imports: [
    IonicPageModule.forChild(UnitTestPage),
  ],
})
export class UnitTestPageModule {}
