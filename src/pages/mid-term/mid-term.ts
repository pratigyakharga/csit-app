import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Parse } from 'parse';

@IonicPage()
@Component({
  selector: 'page-mid-term',
  templateUrl: 'mid-term.html',
})
export class MidTermPage {
  questions : any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.questions = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MidTermPage');
    this.loadMidTermQuestions();
  }
  onBackClick (){
    this.navCtrl.setRoot('SearchPage');
  }
  loadMidTermQuestions() {


    const Question = Parse.Object.extend('Questions');
    const query = new Parse.Query(Question);
    query.equalTo('term', 'midterm');
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
