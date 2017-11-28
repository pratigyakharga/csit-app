import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QuestionsPage } from '../pages/questions/questions';
import { UnitTestPage } from '../pages/unit-test/unit-test';
import { MidTermPage } from '../pages/mid-term/mid-term';
import { PreBoardPage } from '../pages/pre-board/pre-board';
import { FinalExamPage } from '../pages/final-exam/final-exam';
import { UnitTestPageModule } from './unit-test.module';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuestionsPage,
    MidTermPage,
    PreBoardPage,
    FinalExamPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    UnitTestPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QuestionsPage,
    UnitTestPage,
    MidTermPage,
    PreBoardPage,
    FinalExamPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
