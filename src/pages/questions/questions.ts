import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

/**
 * Generated class for the QuestionsPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */

@IonicPage()
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html'
})
export class QuestionsPage {
  
  questions: any[];
  term: any;

  constructor(public navCtrl: NavController) {
    this.term = 'midTerm';
    this.questions = [
      {title : 'some title'}
    ];
  }

}
