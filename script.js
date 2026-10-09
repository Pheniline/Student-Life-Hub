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
  },
  {
    name: "Simulation and Analysis",
    code: "EEE 302",
    status: "Incomplete",
  },
];

units.forEach(function (units) {
  console.log(units.name, units.code, units.status);
});
