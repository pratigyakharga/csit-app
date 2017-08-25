import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Student} from './../../models/Student';
import {Semester} from "../../models/Semester";
import {Subject} from "../../models/Subject";

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

  // variable: type = value;
  // students: Student[];
  // selectedStudent: Student;

  semesters: Semester[];
  selectedSemester: Semester;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  //   this.students = [
  //     new Student("Pratigya", "Kharga", 24),
  //     new Student("Prashant", "Ghimire", 25),
  //     new Student("Sanjeev", "Parajuli", 22)
  //   ];
  //
  //   //this.selectedStudent = this.students[1];
  //
  // }
  //
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad SearchPage', this.students);

    // let firstSem = new Semester();
    // firstSem.name = "First Semester";
    //
    // firstSem.subjects = [
    //   new Subject("Data Structures"),
    //   new Subject("Calculus"),
    // ];
    //
    //
    // console.log(firstSem);

    this.semesters = [
      new Semester("First"),
      new Semester("Second"),
      new Semester("Third"),
      new Semester("Fourth"),
      new Semester("Fifth"),
      new Semester("Sixth"),
      new Semester("Seventh"),
      new Semester("Eighth"),

    ];

    //this.selectedStudent = this.students[1];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage', this.semesters);


  }



}
