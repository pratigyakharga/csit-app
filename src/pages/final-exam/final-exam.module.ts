import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinalExamPage } from './final-exam';

@NgModule({
  declarations: [
    FinalExamPage,
  ],
  imports: [
    IonicPageModule.forChild(FinalExamPage),
  ],
})
export class FinalExamPageModule {}
