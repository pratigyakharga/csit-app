import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForumPostDetailsPage } from './forum-post-details';

@NgModule({
  declarations: [
    ForumPostDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ForumPostDetailsPage),
  ],
})
export class ForumPostDetailsPageModule {}
