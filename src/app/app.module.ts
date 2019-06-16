import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';


import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NewForumPostModalPage } from '../pages/new-forum-post-modal/new-forum-post-modal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewForumPostModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: ''
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewForumPostModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FileChooser,
    InAppBrowser
  ]
})
export class AppModule {
}
