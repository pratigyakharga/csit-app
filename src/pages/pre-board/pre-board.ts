import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Parse} from 'parse';
/**
 * Generated class for the PreBoardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pre-board',
  templateUrl: 'pre-board.html',
})
export class PreBoardPage {
    questions : any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.questions = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreBoardPage');
    this.loadPreBoardQuestions();
  }
  onBackClick (){
    this.navCtrl.setRoot('SearchPage');
  }
  loadPreBoardQuestions() {


    const Question = Parse.Object.extend('Questions');
    const query = new Parse.Query(Question);
    query.equalTo('term', 'preboard');
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
