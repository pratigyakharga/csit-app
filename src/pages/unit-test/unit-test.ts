import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UnitTestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-unit-test',
  templateUrl: 'unit-test.html',
})
export class UnitTestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnitTestPage');
  }

  onBackClick (){
    this.navCtrl.setRoot('SearchPage');
  }

  test(){
    console.log("Hello I'm Test Button");
  }
}
