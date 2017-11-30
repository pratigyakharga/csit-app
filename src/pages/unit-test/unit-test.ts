import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Parse} from 'parse';

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

  onBackClick() {
    this.navCtrl.setRoot('SearchPage');
  }

  test() {
    const Question = Parse.Object.extend('Questions');
    const query = new Parse.Query(Question);
    query.equalTo('term', 'unit');
    query.find({
      success: function (questions) {
        questions.forEach(function (question) {
          console.log('Question is : ',question.toJSON());
        });
      },
      error: function (err) {
        console.log(err);
      }
    });

  }
}
