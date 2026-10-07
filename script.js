const nameInput = document.getElementById("nameInput");
const name = nameInput.value;
const courseInput = document.getElementById("courseInput");
const course = courseInput.value;
const yearInput = document.getElementById("yearInput");
const year = yearInput.value;
const universityInput = document.getElementById("universityInput");
const university = universityInput.value;
const submitButton = document.getElementById("submitButton");
function displayStudentInfo(name, course, year, university) {
  console.log("Name: " + name);
  console.log("Course: " + course);
  console.log("Year: " + year);
  console.log("University: " + university);
}

submitButton.addEventListener("click", function () {
  displayStudentInfo(name, course, year, university);
});

const units = [
  "Digital systems",
  "Simulation and Analysis",
  "Signals & Systems",
  "Electronic and Photonic Devices",
];

function showMyunits(units) {
  console.log("Semester 1 year 3 units : ");
}
showMyunits(units);
