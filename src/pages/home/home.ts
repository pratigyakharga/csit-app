import { Component } from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {Parse} from 'parse';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username: string;
  password: string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.username = "pratigya";
    this.password = "admin123";
  }

  goToMainPage(){
    Parse.User.logIn(this.username, this.password, {
      success: (response) => {
        console.log(response, 'success');
        this.navCtrl.push('SearchPage');
      },
      error: (err)=> {
        console.log(err, 'error');
        this.showLoginError();
      }
    });
  }

  showLoginError() {
    let alert = this.alertCtrl.create({
      title: 'Login failed',
      subTitle: 'Incorrect ID or password. Please provide correct login credentials.',
      buttons: ['Ok']
    });
    alert.present();
  }

  goToRegisterPage() {
    this.navCtrl.push('RegisterPage');
  }

  goToUploadPage() {
    this.navCtrl.push('UploadPage');
  }
}
