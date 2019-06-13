import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Semester} from "../../models/Semester";
import {Subject} from "../../models/Subject";
import {Parse} from 'parse';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  gotoDisplayPage(){}

  semesters: Semester[];
  selectedSemester: Semester;
  selectedSubject: any;
  subjects: Subject[];
  term: string = 'Mid';
  year: string = '2019';
  Question: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.Question = Parse.Object.extend('Questions');

    let firstSem = new Semester("First");
    firstSem.subjects = [
      new Subject("Stats"),
      new Subject("Calculus"),
      new Subject("FIT"),
      new Subject("Probability"),
      new Subject("C Programming "),
    ];
    let secondSem = new Semester("Second");
    secondSem.subjects = [
      new Subject("Linear Algebra"),
      new Subject("Data Structure and Algorithms"),
      new Subject("Discrete Structures"),
      new Subject("Microprocessor"),
      new Subject("Digital Logic"),
    ];
    let thirdSem = new Semester("Third");
    thirdSem.subjects = [
      new Subject("Numerical Methods"),
      new Subject("Operating Systems"),
      new Subject("Introduction to Management"),
      new Subject("Object Oriented Programming"),
      new Subject("Computer Architecture"),
    ];
    let fourthSem = new Semester("Fourth");
    fourthSem.subjects = [
      new Subject("Computer Graphics"),
      new Subject("DBMS"),
      new Subject("System Analysis and Design"),
      new Subject("Artificial Intelligence"),
      new Subject("Theory of Computation"),

    ];
    let fifthSem = new Semester("Fifth");
    fifthSem.subjects = [
      new Subject("Computer Networks"),
      new Subject("Simulation and Modeling"),
      new Subject("Design and Analysis of Algorithms"),
      new Subject("Cryptography"),


    ];
    let sixthSem = new Semester("Sixth");
    sixthSem.subjects = [
      new Subject("Software Engineering"),
      new Subject("Compiler Design and Construction"),
      new Subject("Web Technologies"),
      new Subject("Real Time System"),
      new Subject("Image Processing"),
    ];
    let seventhSem = new Semester("Seventh");
    seventhSem.subjects = [
      new Subject("Advance DBMS"),
      new Subject("Internet Technology"),
      new Subject("Advanced Java Programming"),
      new Subject("Network and System Administration"),
    ];
    let eighthSem = new Semester("Eighth");
    eighthSem.subjects = [
      new Subject("Data Warehousing"),
      new Subject("Internship"),
      new Subject("Network Security"),
      new Subject("Cloud Computing"),
    ];

    this.semesters = [
      firstSem,
      secondSem,
      thirdSem,
      fourthSem,
      fifthSem,
      sixthSem,
      seventhSem,
      eighthSem,
    ];

    // auto populators
    this.selectedSemester = firstSem;
    this.selectedSubject = 'Calculus';

  }
  goToDisplayPage(){
    console.log('search display : ', this.selectedSemester, this.selectedSubject, this.term, this.year);
    // if(this.selectedSemester && this.selectedSubject) {
    //   localStorage.SELECTED_SUBJECT = this.selectedSubject;
    //   localStorage.SELECTED_SEMESTER = this.selectedSemester.name;
    //   this.navCtrl.setRoot('QuestionsPage');
    // }

    let query = new Parse.Query(this.Question);

    query.equalTo('year', parseInt(this.year));
    query.equalTo('term', this.term);
    query.equalTo('subject', this.selectedSubject);
    query.equalTo('semester', this.selectedSemester.name);

    let results = query.first().then(res => {
      console.log(res);
      this.showPdf(res)
    })
    .catch( err => {
      console.log(err);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage', this.semesters);
  }

  onSemesterChange(selectedSemester: Semester) {
    console.log('changed to : ',selectedSemester);
    this.selectedSubject = undefined;
  }

  showPdf (question){
    let pdfUrl = question.get('pdfUrl');
    console.log('this is the PDF url : ', pdfUrl);
  }
}
