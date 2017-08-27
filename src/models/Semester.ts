import {Subject} from "./Subject";

class Semester {
  name: string;
  subjects : Subject[];
  constructor (semesterName: string, ){
    this.name = semesterName;
  }

  // constructor(public name: string){}

}

export {Semester};
