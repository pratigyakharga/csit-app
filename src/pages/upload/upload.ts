import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Subject} from "../../models/Subject";
import {Semester} from "../../models/Semester";

/**
 * Generated class for the UploadPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {
  semesters: Semester[];
  selectedSemester: Semester;
  subjects: Subject[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

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
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadPage',this.semesters);
  }

}
