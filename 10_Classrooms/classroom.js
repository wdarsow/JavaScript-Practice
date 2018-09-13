let Student = require('./student');

function ClassRoom(numStudents, profName, roomNum) {
    this.studentArray = [];
    this.numStudents = numStudents,
    this.profName = profName,
    this.roomNum = roomNum,
    this.addStudent = function(name, subject, gpa) {
        this.studentArray.push(new Student(name, subject, gpa));
        this.numStudents++;
        // console.log("student array contains " + JSON.stringify(studentArray[0]));
    }
}

// ClassRoom(2);

let fallClass = new ClassRoom(3, "Professor 2", 123);
fallClass.addStudent("Jim", "math", 3.95);
console.log("student array contains " + JSON.stringify(fallClass.studentArray[0]));
console.log(fallClass.numStudents, fallClass.profName, fallClass.roomNum);