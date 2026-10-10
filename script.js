const student = {
  name: "Pheniline Jerono",
  year: 3,
  course: "Electrical Engineering",
  units: 8,
};

console.log(student.name, student.year, student.course, student.units);
student.year = 4;
console.log(student.year);

student.gpa = 3.0;
console.log(student.gpa);

student.university = "JKUAT";
console.log(student.university);

const units = [
  {
    name: "Digital Systems",
    code: "EEE 301",
    status: "Incomplete",
    gpa: 2,
  },
  {
    name: "Simulation and Analysis",
    code: "EEE 302",
    status: "Incomplete",
    gpa: 4,
  },
];

const threegpaUnits = units.filter(function (units) {
  return units.gpa === 3;
});
threegpaUnits.forEach(function (units) {
  console.log(units.name);
});

const foundunit = units.find(function (units) {
  return units.gpa === 4;
});
console.log(foundunit.name, foundunit.code, foundunit.status);

const unitcodes = units.map(function (units) {
  return units.code;
});
console.log(unitcodes);

const unitgpa = units.every(function (units) {
  return units.gpa < 2;
});
console.log(unitgpa);

const heading = document.getElementById("welcome");
const button = document.getElementById("submit");
button.addEventListener("click", function () {
  heading.textContent = `Welcome ${document.getElementById("name").value}  ${document.getElementById("course").value} 
  ${document.getElementById("year").value}!`;
});
