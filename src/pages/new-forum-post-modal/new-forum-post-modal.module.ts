import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewForumPostModalPage } from './new-forum-post-modal';

@NgModule({
  declarations: [
    NewForumPostModalPage,
  ],
  imports: [
    IonicPageModule.forChild(NewForumPostModalPage),
  ],
})
export class NewForumPostModalPageModule {}
