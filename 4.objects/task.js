function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;

}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks =[];
    this.marks.push(mark);
    } else {
      this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (...args) {

  if (this.marks === undefined) {
    this.marks =[];
    args.map(el => this.marks.push(el));

  } else {
    args.map(el => this.marks.push(el));
  }
}

Student.prototype.getAverage = function () {
  let sum = 0;
  this.marks.map(el => sum += el);
  return sum / this.marks.length
  
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason
  delete this.marks
  delete this.subject
}
