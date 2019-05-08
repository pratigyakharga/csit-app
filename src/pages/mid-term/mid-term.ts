import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Parse} from 'parse';

@IonicPage()
@Component({
  selector: 'page-mid-term',
  templateUrl: 'mid-term.html',
})
export class MidTermPage {
  questions: any[];
  selectedSemester: string;
  selectedSubject: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.questions = [];
    this.selectedSemester = localStorage.SELECTED_SEMESTER;
    this.selectedSubject = localStorage.SELECTED_SUBJECT;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MidTermPage');
    this.loadMidTermQuestions();
  }

  onBackClick() {
    this.navCtrl.setRoot('SearchPage');
  }

  loadMidTermQuestions() {

    const Question = Parse.Object.extend('Questions');
    const query = new Parse.Query(Question);

    query.equalTo('subject', this.selectedSubject);
    query.equalTo('semester', this.selectedSemester);
    query.equalTo('term', 'mid');

    console.log('subject', this.selectedSubject);
    console.log('sem', this.selectedSemester);

    query.find().then((questions) => {
      this.questions = questions.map((q) => {
        console.log(q, 'question');
        var question = q.toJSON();
        question.body = question.body.split("~");
        return question;
      });
      console.log('questions loaded', this.questions);
    });


  }
}
