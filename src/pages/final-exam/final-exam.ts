import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Parse } from 'parse';

@IonicPage()
@Component({
  selector: 'page-final-exam',
  templateUrl: 'final-exam.html',
})
export class FinalExamPage {
  questions : any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.questions = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinalExamPage');
    this.loadFinalExamQuestions();
  }
  onBackClick (){
    this.navCtrl.setRoot('SearchPage');
  }
  loadFinalExamQuestions() {


    const Question = Parse.Object.extend('Questions');
    const query = new Parse.Query(Question);
    query.equalTo('term', 'finalexam');
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
