import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Parse } from 'parse';
import { AlertController } from 'ionic-angular';
import { Semester } from "../../models/Semester";
import { Subject } from "../../models/Subject";

/**
 * Generated class for the AdminPortalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-portal',
  templateUrl: 'admin-portal.html',
})
export class AdminPortalPage {

  subject: string;
  semester: Semester;
  semesters: Semester[];
  term: any; //mid, unitTest, preBoard, final
  terms: any[];
  year: string = '2070';
  pdfChoosen: boolean;
  uploadFile: File;
  Question: any;
  categories: any[];
  category: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtr: AlertController) {

    this.categories = [
      { name: 'Questions', value: 'Questions' },
      { name: 'Solutions', value: 'Solutions' },
      { name: 'Notes', value: 'Notes' },
    ];
    this.category = this.categories[0];

    this.terms = [
      { name: 'First Term', value: 'firstTerm' },
      { name: 'Mid Term', value: 'midTerm' },
      { name: 'Pre Board', value: 'preBoard' },
      { name: 'Final Term', value: 'final' },
    ];
    this.term = this.terms[0];

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
    this.semester = firstSem;
    this.subject = 'Calculus';

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPortalPage');
  }

  choosePdf(event) {
    console.log('will choose PDF', event);
    let file = event.target.files[0];
    console.log(file);
    this.uploadFile = file;
  }

  uploadPdf() {
    console.log('will upload pdf');
    let parseFile = new Parse.File('myFile', this.uploadFile);
    parseFile
      .save()
      .then((saved) => {
        console.log(' saved ', saved);

        this.saveContent(saved._url);

      })
      .catch((err) => {
        console.log('error : ', err);
      });
  }

  saveContent(url) {

    let ContentData = {
      pdfUrl: url,
      term: this.term.value,
      subject: this.subject,
      semester: this.semester.name,
      year: parseInt(this.year),
      type: 'pdf'
    };

    if (this.category.name === 'Notes'){
      delete ContentData.year;
    }
    
    let Content = Parse.Object.extend(this.category.name);
    let content = new Content();
    content.save(ContentData)
      .then((savedContent) => {
        console.log('saved content: ', savedContent);
        this.showSuccessDialog();
      })
      .catch(err => {
        console.log('save error in content');
      });

  }

  showSuccessDialog() {

    let alert = this.alertCtr.create({
      title: 'Success',
      subTitle: 'Content upload successfully!',
      buttons: ['Ok']
    });

    alert.present();
  }

  onSemesterChange(selectedSemester: Semester) {
    console.log('changed to : ', selectedSemester);
    try {
      this.subject = selectedSemester.subjects[0].name;
    } catch (err) {
      this.subject = undefined;
    }
  }

}
