import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToMainPage(){
    this.navCtrl.push('SearchPage');
  }

  goToRegisterPage() {
    this.navCtrl.push('RegisterPage');
  }

  goToUploadPage() {
    this.navCtrl.push('UploadPage');
  }
}
