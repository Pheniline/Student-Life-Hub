const units = [
  "Digital systems",
  "Simulation and Analysis",
  "Signals & Systems",
  "Electronic and Photonic Devices",
];

function showMyunits(units) {
  console.log("Semester 1 year 3 units : ");
  console.log(units[0], units[1], units[2], units[3]);

  for (let i = 0; i < units.length; i++) {
    console.log(units[i]);
  }
}
showMyunits(units);
