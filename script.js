let name = "Pheniline Jerono";
let age = 20;
let course = "Electrical Engineering";
let university = "JKUAT";
let isStudent = true;

console.log("Name: " + name);
console.log("Age: " + age);
console.log("Course: " + course);
console.log("University: " + university);
console.log("Is Student: " + isStudent);

const year = 3;
if (year === 1) {
  console.log("First Year");
} else if (year === 2) {
  console.log("Second Year");
} else if (year === 3) {
  console.log("Third year");
} else if (year === 4) {
  console.log("Fourth Year");
} else if (year === 5) {
  console.log("Fifth Year");
} else {
  console.log("Invalid Year");
}

const gpa = 3.8;
if (gpa >= 3.5) {
  console.log("First Class");
} else if (gpa >= 3.0) {
  console.log("Second class upper");
} else if (gpa >= 2.5) {
  console.log("Second class lower");
} else if (gpa >= 2.0) {
  console.log("Pass");
} else {
  console.log("Fail");
}

function displayStudentInfo( name, course, year, university) {
  console.log("Name: " + name);
  console.log("Course: " + course);
  console.log("Year: " + year);
  console.log("University: " + university);

}
displayStudentInfo( Pheniline Jerono, Electrical Engineering, 3, JKUAT);
