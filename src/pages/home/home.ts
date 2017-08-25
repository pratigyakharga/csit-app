import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  goToMainPage(){
    this.showAlert();
    this.navCtrl.push('SearchPage');
  }

  showAlert(){
      let alert = this.alertCtrl.create({
          title: 'Login Attempt Successful',
          buttons: ['OK']
      });
      alert.present();
  }
  
}
