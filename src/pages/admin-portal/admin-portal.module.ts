import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminPortalPage } from './admin-portal';

@NgModule({
  declarations: [
    AdminPortalPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminPortalPage),
  ],
})
export class AdminPortalPageModule {}
