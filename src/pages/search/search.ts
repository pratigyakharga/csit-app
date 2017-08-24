import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Student} from './../../models/Student';

/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
	
  pratigya = new Student("Pratigya", "Kharga", 24);
  nischal = new Student("Nischal", "Niroula", 22);
  prashant = new Student("Prashant", "Ghimire", 25);
  sanjeev = new Student("Sanjeev", "Parajuli", 22);

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }



}