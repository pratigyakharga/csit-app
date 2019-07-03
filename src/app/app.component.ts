import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';

import {Parse} from 'parse';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{ title: string, component: any, action?: any, backView?: boolean, icon: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {icon: 'person', title: 'My Profile', component: 'ProfilePage', backView: true},
      {icon: 'apps', title: 'Colleges', component: 'CollegesPage', backView: true},
      {icon: 'copy', title: 'Syllabus', component: 'SyllabusPage', backView: true},
      {icon: 'book', title: 'News', component: 'NewsPage', backView: true},
      {icon: 'people', title: 'Events', component: 'EventsPage', backView: true},
      {icon: 'person-add', title: 'Invite Friends', component: 'InviteFriendsPage', backView: true},
      {icon: 'thumbs-up', title: 'Like Us', component: 'LikeUsPage', backView: true},
      {icon: 'log-out', title: 'Logout', component: HomePage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      Parse.initialize("glF2OU2o555Hceg8J3Ml", "lCvBBj7LEOBrKQqX6Qlm");
      Parse.serverURL = "https://csit-app.herokuapp.com/parse";
      console.log(Parse, 'parse');
      let currentUser = Parse.User.current();
      this.rootPage = HomePage;
      if (currentUser) {
        this.rootPage = 'SearchPage';
      }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.backView) {
      this.nav.push(page.component);
    } else {
      this.nav.setRoot(page.component, {}, {}, () => {
        Parse.User.logOut().then(() => {
          console.log('user logged out');
        }).catch(() => {
          console.log('user logout fail');
        });
      });
    }
  }
}
