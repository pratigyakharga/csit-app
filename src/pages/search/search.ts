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

  students: Student[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.students = [
      new Student("Pratigya", "Kharga", 24),
      new Student("Prashant", "Ghimire", 25),
      new Student("Sanjeev", "Parajuli", 22)
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage', this.students);

  }



}
