import {ChangeDetectorRef, Component, NgZone} from '@angular/core';
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

  questions: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.questions = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnitTestPage');
    this.loadUnitTestQuestions();
  }

  onBackClick() {
    this.navCtrl.setRoot('SearchPage');
  }

  loadUnitTestQuestions() {


    const Question = Parse.Object.extend('Questions');
    const query = new Parse.Query(Question);
    query.equalTo('term', 'unit');
    query.find().then( (questions)=> {
      this.questions = questions.map((q)=> {
        var question = q.toJSON();
        question.body = question.body.split("~");
        return question;
      });
      console.log('questions loaded', this.questions);
    });

  }
}
