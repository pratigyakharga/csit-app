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
  termMap = {
    firstTerm: 'First Term',
    midTerm: 'Mid Term',
    preBoard: 'Pre Board',
    final: 'Final (TU)',
  };

  constructor(public navCtrl: NavController) {
    this.term = 'firstTerm';

    // need to load this from server
    this.questions = [
      {title : 'some title'}
    ];
  }

  setTerm(term){
    // load q according to term
    console.log(term, 'invoked!');
  }

}
