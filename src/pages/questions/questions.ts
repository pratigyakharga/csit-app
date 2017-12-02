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

  unitTestRoot = 'UnitTestPage';
  midTermRoot = 'MidTermPage';
  preBoardRoot = 'PreBoardPage';
  finalExamRoot = 'FinalExamPage';


  constructor(public navCtrl: NavController) {
  }

}
