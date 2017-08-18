import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

<<<<<<< HEAD
  goToMainPage(){
=======
  onLoginClick(){
>>>>>>> b1a1bfc73e9f33b73066047855c5941cf3eb9168
  		this.navCtrl.push('SearchPage');
  }

}
